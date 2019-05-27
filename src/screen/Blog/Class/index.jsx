import React, {Component} from 'react';
import {Tabs} from 'antd';

import ArticleItem from '../../../components/ArticleItem/';

import './index.less';

const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor () {
    super ();

    this.state = {
      tags: ['前端', '后端', '大数据', '系统', '文学', '设计', '产品'],
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }
  render () {
    return (
      <div className="class">
        <Tabs
          defaultActiveKey="0"
          tabBarStyle={{
            backgroundColor: '#fff',
            border: 0,
            padding: '16px',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
          onChange={this.callback}
        >
          {this.state.tags.map ((tag, index) => (
            <TabPane tab={tag} key={index}>
              <ArticleItem
                data={{
                  figure: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  title: '假数据',
                  abstract: '假数据假数据假数据假数据',
                  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  username: 'Aaron',
                  source: 0,
                  views: 100,
                  labelName: 'ts',
                  modifyTime: 1558078010033,
                }}
                toPath={() => this.toPath ()}
              />
              <ArticleItem
                data={{
                  figure: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  title: '假数据',
                  abstract: '假数据假数据假数据假数据',
                  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  username: 'Aaron',
                  source: 0,
                  views: 100,
                  labelName: 'ts',
                  modifyTime: 1558078010033,
                }}
                toPath={() => this.toPath ()}
              />
              <ArticleItem
                data={{
                  figure: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  title: '假数据',
                  abstract: '假数据假数据假数据假数据',
                  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  username: 'Aaron',
                  source: 0,
                  views: 100,
                  labelName: 'ts',
                  modifyTime: 1558078010033,
                }}
                toPath={() => this.toPath ()}
              />
              <ArticleItem
                data={{
                  figure: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  title: '假数据',
                  abstract: '假数据假数据假数据假数据',
                  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  username: 'Aaron',
                  source: 0,
                  views: 100,
                  labelName: 'ts',
                  modifyTime: 1558078010033,
                }}
                toPath={() => this.toPath ()}
              />
              <ArticleItem
                data={{
                  figure: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  title: '假数据',
                  abstract: '假数据假数据假数据假数据',
                  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  username: 'Aaron',
                  source: 0,
                  views: 100,
                  labelName: 'ts',
                  modifyTime: 1558078010033,
                }}
                toPath={() => this.toPath ()}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }

  toPath () {
    return '/blog';
  }

  callback (key) {
    console.log (key);
  }
}
