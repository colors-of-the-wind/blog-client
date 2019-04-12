import React, { Component } from 'react'
import { Tag } from 'antd';

import './index.less'

export default class extends Component{
  constructor () {
    super()

    this.state = {
      list: [1,2,3,4,5,6,6,7,8,8,89,9]
    }
  }
  render (){
    return (
      <div className="team">
        <div className="team-header">
            <h5>团队介绍</h5>
            <p>介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队介绍团队</p>
        </div>
        <ul className="team-content">
          { this.state.list.map((item, index) => <li key={index} className="team-item">
            <img src="http://hbimg.b0.upaiyun.com/3385e755c44be2ead734b2f926bb778cbb6c2b9f478ee-CmiJzn_fw658" alt=""/>
            <div className="team-tags">
              <Tag color="#f50">前端</Tag>
              <Tag color="#2db7f5">Nodejs</Tag>
              <Tag color="#87d068">小程序</Tag>
              <Tag color="#108ee9">Java</Tag>
            </div>
            <div className="team-gos">
              <a href="https://www.baidu.com">进入ta的个人主页</a>
              <a href="https://www.baidu.com">进入ta的GitHub</a>
            </div>
          </li>) }
        </ul>
      </div>
    )
  }
}
