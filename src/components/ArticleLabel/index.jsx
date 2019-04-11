import React, {PureComponent} from 'react'
import {Icon} from 'antd'
import './index.less'

export default class extends PureComponent {
  render() {
    return (
      <div className="article-label">
        <img
          className="article-avatar"
          src="http://pic1.win4000.com/wallpaper/a/52c62531085dc.jpg"
          alt="logo"
        />
        <span className="article-name">Array</span>
        <span className="article-original">
          <Icon
            className="a-icon"
            type="highlight"
            theme="twoTone"
            twoToneColor="#e33c64"
          />
          原创
        </span>
        <span className="article-amount">
          <Icon
            className="a-icon"
            type="fire"
            theme="twoTone"
            twoToneColor="#ff8d1a"
          />
          133万
        </span>
        <span className="article-type">
          <Icon
            className="a-icon"
            type="tags"
            theme="twoTone"
            twoToneColor="#43cf7c"
          />
          Javascript
        </span>
        <span className="article-time">
          <Icon
            className="a-icon"
            type="clock-circle"
            theme="twoTone"
            twoToneColor="#7948ea"
          />
          Oct 13, 2019
        </span>
      </div>
    )
  }
}
