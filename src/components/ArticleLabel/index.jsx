import React, {PureComponent} from 'react'
import {Icon} from 'antd'
import './index.less'

export default ({data}) => <div className="article-label">
  <img
    className="article-avatar"
    src={data.avatar}
    alt="avatar"
  />
  <span className="article-name">{data.username}</span>
  <span className="article-original">
    <Icon
      className="a-icon"
      type="highlight"
      theme="twoTone"
      twoToneColor="#e33c64"
    />
    {data.source ? '转载' : '原创'}
  </span>
  <span className="article-amount">
    <Icon
      className="a-icon"
      type="fire"
      theme="twoTone"
      twoToneColor="#ff8d1a"
    />
    {data.views}
  </span>
  <span className="article-type">
    <Icon
      className="a-icon"
      type="tags"
      theme="twoTone"
      twoToneColor="#43cf7c"
    />
    {data.labelName}
  </span>
  <span className="article-time">
    <Icon
      className="a-icon"
      type="clock-circle"
      theme="twoTone"
      twoToneColor="#7948ea"
    />
    {data.modifyTime}
  </span>
</div>
