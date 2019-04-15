import React, {Component} from 'react'
import Pagination from '../../components/Pagination'

import request from '../../utils/request'

import ArticleItem from '../../components/ArticleItem/'

import './index.less'

@request()
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="main-box">
          <ArticleItem
            title="文章标题"
            info="文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介。文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介。"
            brief="http://pic1.win4000.com/wallpaper/a/52c62531085dc.jpg"
          />
          <ArticleItem
            title="文章标题"
            info="文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介。"
            brief="http://pic1.win4000.com/wallpaper/a/52c62531085dc.jpg"
          />
          <ArticleItem
            title="文章标题"
            info="文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介。"
            brief="http://pic1.win4000.com/wallpaper/a/52c62531085dc.jpg"
          />
          <ArticleItem
            title="文章标题"
            info="文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介。"
            brief="http://pic1.win4000.com/wallpaper/a/52c62531085dc.jpg"
          />
          <ArticleItem
            title="文章标题"
            info="文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介。"
            brief="http://pic1.win4000.com/wallpaper/a/52c62531085dc.jpg"
          />
        </div>
        <Pagination/>
      </div>
    )
  }
}

export default Home
