import React, {PureComponent} from 'react'
import {Skeleton} from 'antd'

import ArticleLabel from '../ArticleLabel/'

import './index.less'

export default class extends PureComponent {
  render() {
    return (
      <div className="article">
        <Skeleton active loading={this.props.loading}>
          <img className="article-brief" src={this.props.brief} alt="brief" />
          <div className="article-info">
            <h2 className="article-title">{this.props.title}</h2>
            <p className="article-context">{this.props.info}</p>
            <div className="article-label">
              <ArticleLabel />
            </div>
          </div>
        </Skeleton>
      </div>
    )
  }
}
