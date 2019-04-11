import React, {Component} from 'react'
import {List, Card} from 'antd'

import './index.less'
import { red } from 'ansi-colors';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
]

export default class extends Component {
  render() {
    return (
      <div className="label">
        <List dataSource={data} renderItem={item => this.renderItem(item)} />
      </div>
    )
  }

  renderItem(item) {
    return <List.Item>
      <div className="l-item-box">
        <img className="l-item-img" src="https://img.xiaopiu.com/userImages/img1140716995179ad0.png" alt=""/>
        <div>
          <h6>Typescript</h6>
          <p>20000 文章</p>
        </div>
      </div>
    </List.Item>
  }


}
