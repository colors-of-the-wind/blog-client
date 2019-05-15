import React, { Component } from 'react'
import { Tabs } from 'antd';

import ArticleItem from '../../../components/ArticleItem/'

import './index.less'

const TabPane = Tabs.TabPane;

export default class extends Component{
  constructor () {
    super();

    this.state = {
      tags: ['前端', '后端', '大数据', '系统', '文学', '设计', '产品'],
      list: [1,2,3,4,5,6,7,8,9,10]
    }
  }
  render (){
    return (
      <div className="class">
        <Tabs defaultActiveKey="0" tabBarStyle={ {backgroundColor: '#fff', border: 0, padding: '16px', borderRadius: '6px', display: 'flex', justifyContent: 'space-around'} } onChange={this.callback}>
          { this.state.tags.map((tag, index) => <TabPane tab={tag} key={index}>
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
          </TabPane>) }
        </Tabs>
      </div>
    )
  }
  callback(key) {
    console.log(key);
  }
}
