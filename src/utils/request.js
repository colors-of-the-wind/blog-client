import qs from 'qs'
import React from 'react'
import axios from 'axios'
import { message } from 'antd'

// 全局配置文件（由webpack生成）
import config from '../config'

// 宏：http成功状态码
const HTTP_SUCCESS_CODE = 200
// 宏：请求成功状态码
const SUCCESS_CODE = 0
// 宏：鉴权失败状态码
const AUTH_CODE = 443

// 参数携带再body中的请求类型
const requestBody = ['POST', 'PUT', 'PATCH']
// 所有请求类型
const restfulApi = ['GET', 'HEAD', 'DELETE', ...requestBody]

// 请求默认配置参数
let defaultOptions = { timeout: 8000 }
// 请求计数器（防止并发请求）
let count = 0
// 记录返回值
let stagingRes = null;

/**
 * 开发阶段log
 * @param  {String} url   请求url
 * @param  {String} params   请求参数
 * @param  {Object} method   请求类型
 * @param  {Object} options   请求配置
 * @param  {Boolean} poorDate   请求时长
 * @param  {Boolean} stagingRes   请求返回所有值
 */
const devLogs = (url, params, method, options, poorDate, stagingRes) => {
    if (config.env !== 'development') return false;

    console.group ('%c当前请求详细信息： ', 'background:#000;color:#bada55')
    console.log ('%c请求地址：', 'color:#A101A6;font-weight: 600', url)
    console.log ('%c请求类型：', 'color:#A101A6;font-weight: 600', method)
    console.log ('%c请求参数：', 'color:#A101A6;font-weight: 600', params)
    console.log ('%c请求配置：', 'color:#A101A6;font-weight: 600', options)
    console.log ('%c请求耗时：', 'color:#A101A6;font-weight: 600', `${poorDate} ms`)
    console.log ('%c返回数据：', 'color:#A101A6;font-weight: 600', stagingRes)
    console.groupEnd ();
}

/**
 * 请求模型工厂（三阶函数）
 * @param  {String} method   请求类型
 * @param  {String} url   请求url
 * @param  {Object} params   请求参数
 * @param  {Object} axiosOptions   修改axios默认参数
 * @param  {Boolean} isLoading   是否打开loading
 * @return {Function} 
 */
const httpFactory = method => (url, params = {}, axiosOptions = {}, isLoading = false) => {
	const options = { ...defaultOptions, ...axiosOptions, method, url }
    
	if (requestBody.includes(method.toUpperCase())) {
        options.data = params
	} else { 
		const query = qs.stringify(params)

		if (query) url += `?${query}`
	}

	return new Promise ((resolve, reject) => {
        const startDate = Date.now ()

        if (count <= 0 && isLoading) {
            // 打开loading
        }

        isLoading && count++;
        
		axios(options)
		.then(accept => {
            stagingRes = accept;

            const result = accept.data
            const message = result.message || '啊哦~遇到了错误，请后再试'

            if (accept.status !== HTTP_SUCCESS_CODE) {
                message.error('请求失败，请稍后再试')
                return reject('请求失败，请稍后再试')
            }

            if (result.code === AUTH_CODE) {
                message.error('登陆超时，请重新登陆')
                reject('登陆超时，请重新登陆')

                // 跳转路由为登陆

                return false
            }

            if (result.code !== SUCCESS_CODE) return reject(message)

            resolve(result.data)
        })
        .catch(e => {
            stagingRes = e;
            message.error('未连接到服务器，请稍后再试')
			reject('未连接到服务器，请稍后再试')
        })
        .finally (() => {
            const poorDate = Date.now () - startDate;

            isLoading && count--;
            devLogs(url, params, method, options, poorDate, stagingRes)
            if (count <= 0 && isLoading) {
                if (poorDate < 400) {
                    setTimeout (() => {
                        // 关闭loading
                    }, 400);
                } else {
                    // 关闭loading
                }
            }
        })
	})
}

/**
 * 请求方法生成工厂函数
 * @param  {...String} need   需要生成的方法
 * @return {Object} 生成后的所有方法
 */
const methodsFactory = (need) => {
    const collection = {}
    let apiMethods = restfulApi;

    if (Array.isArray(need) && !!need.length) {
        apiMethods = restfulApi.filter(method => need.includes(method))
    }

    apiMethods.forEach(method => {
        collection[method.toLowerCase()] = httpFactory(method);
    })

    collection.all = (...arg) => {
        const newArg = arg.filter(fn => typeof fn === 'function' && fn.then)

        return Promise.all(newArg)
    }

    collection.race = (...arg) => {
        const newArg = arg.filter(fn => typeof fn === 'function' && fn.then)

        return Promise.race(newArg)
    }

    return collection
}


/**
 * react 高阶组件
 * @param  {...String} need   需要注入的方法
 * @param  {Component} Target 需要包裹的目标组件
 * @return {Component} 包装过的react组件
 */

export default (...need) => Target => {

    const methods = methodsFactory(need);

    return class extends React.Component {
        render () {
            const oldProps = this.props
            return <Target {...oldProps} {...methods} />
        }
    }
}