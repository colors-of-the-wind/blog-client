import React from 'react'
import axios from 'axios'
import qs from 'qs'

const requestBody = ['POST', 'PUT', 'PATCH']
const restfulApi = ['GET', 'HEAD', 'POST', 'DELETE', 'PUT', 'PATCH']

let defaultOptions = {
  headers: {},
  params: {},
  data: {},
  timeout: 8000,
  auth: {},
  responseType: 'text',
  validateStatus: () => true
}

const httpFactory = method => (url, params = {}, axiosOptions, isLoading = true) => {
	const options = { ...defaultOptions, ...axiosOptions, method, url }

    
	if (requestBody.includes(method.toUpperCase())) {
        options.data = params
	} else { 
		const query = qs.stringify(params)

		if (query) url += `?${query}`
	}

	return new Promise ((resolve, reject) => {
		axios(options)
		.then(result => {
            if (result.status !== 200) {
                return reject(result.data.message || '错误请稍后再试')
            } else {
                resolve(result.data)
            }
        })
        .catch(e => {
			reject('错误请稍后再试')
		})
	})
}

const methodsFactory = (axiosOptions) => {
    const collection = {}
    restfulApi.forEach(method => {
        collection[method.toLowerCase()] = httpFactory(method, axiosOptions)
    })

    collection.all = (...arg) => {
        arg.filter(fn => typeof fn === 'function' && fn.then)

        return Promise.all(arg)
    }

    collection.race = (...arg) => {
        arg.filter(fn => typeof fn === 'function' && fn.then)

        return Promise.race(arg)
    }

    return collection
}


export default axiosOptions => Target => {

    const methods = methodsFactory(axiosOptions)

    return class extends React.Component {
        render () {
            const oldProps = this.props
            return <Target {...oldProps} {...methods} />
        }
    }
}