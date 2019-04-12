import React, {Component} from 'react'

import './index.less'

const data = [1, 2,4,5,6,7,8,9,0,10, 2,4,5,6,7,8,9,0,10, 2,4,5,6,7,8,9,0,10]

export default class extends Component {
  render() {
    return (
      <div className="label">
        <ul className="l-box">
          {
            data.map((item, index) => <li key={ index }>
              <div className="l-item-box">
                <img className="l-item-img" src="https://img.xiaopiu.com/userImages/img1140716995179ad0.png" alt=""/>
                <div className="l-item-content">
                  <h6 className="l-item-title">Typescript</h6>
                  <p className="l-item-number">20000 文章</p>
                </div>
              </div>
            </li>)
          }
        </ul>
      </div>
    )
  }
}
