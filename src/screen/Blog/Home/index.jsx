import React, {Component} from 'react';
import Pagination from '../../../components/Pagination';
import request from '../../../utils/request';
import ArticleItem from '../../../components/ArticleItem/';
import {ScrollContext} from '../index';

import './index.less';

@request ()
class Home extends Component {
  static contextType = ScrollContext;

  state = {
    list: [{}, {}, {}],
    count: 0,
    load: true,
  };

  page = 1;
  pageSize = 10;

  render () {
    const {load, list, count} = this.state;

    return (
      <div className="home">
        <div className="main-box">
          {this.state.list.map ((item, index) => (
            <ArticleItem
              key={index}
              data={item}
              toPath={this.toPath.bind (this)}
              loading={load}
            />
          ))}
        </div>
        {!load &&
          list.length &&
          <Pagination
            showSizeChanger
            current={this.page}
            showQuickJumpe
            total={count}
            onShowSizeChange={this.onShowSizeChange.bind (this)}
            onChange={this.onChange.bind (this)}
          />}
      </div>
    );
  }

  toPath () {
    return '/blog';
  }

  onChange (page) {
    this.page = page;
    this.onLoad ();
  }

  onShowSizeChange (page, pageSize) {
    this.pageSize = pageSize;
    this.page = 1;
    this.onLoad ();
  }

  componentDidMount () {
    this.onLoad ();
  }

  async onLoad () {
    const result = await this.props.get ('/api/article/list', {
      page: this.page,
      pageSize: this.pageSize,
    });
    this.context.scrollTop (0);
    this.setState ({...result, load: false});
  }
}

export default Home;
