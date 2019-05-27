import React, {Component} from 'react';
import {Input, List, Tag} from 'antd';
import {Link} from 'react-router-dom';

import ToolTemplate from '../../../../components/ToolTemplate';
import {rangeRandom} from '../../../../utils/random';
import request from '../../../../utils/request';

import './index.less';

const Search = Input.Search;

const colors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

@request ()
class Tool extends Component {
  constructor (props) {
    super (props);
    this.state = {
      articles: [],
      articleLoad: true,
      tags: [],
      tagLoad: true,
    };
  }

  render () {
    const {articleLoad, articles, tagLoad, tags} = this.state;
    return (
      <div>
        <ToolTemplate title="全站搜索">
          <Search
            placeholder="搜索内容..."
            onSearch={value => console.log (value)}
            style={{width: '100%'}}
          />
        </ToolTemplate>
        <ToolTemplate title="热门文章">
          <List
            size="small"
            itemLayout="vertical"
            loading={articleLoad}
            split={false}
            dataSource={articles}
            renderItem={item => (
              <Link to="/blog/">
                <List.Item className="tool-item">{item.title}</List.Item>
              </Link>
            )}
          />
        </ToolTemplate>
        <ToolTemplate title="热门标签">
          <List
            size="small"
            loading={tagLoad}
            split={false}
            dataSource={tags}
            renderItem={(item, index) => this.renderItem (item, index)}
          />
        </ToolTemplate>
      </div>
    );
  }

  renderItem (item, index) {
    const currentRange = rangeRandom (0, colors.length - 1);
    const currentColor = colors[currentRange];
    return (
      <Tag color={currentColor} className="tool-tag">
        {item.labelName}
      </Tag>
    );
  }

  componentDidMount () {
    this.getTags ();
    this.getArticles ();
  }

  async getArticles () {
    const result = await this.props.get ('/api/article/hot');

    this.setState ({articles: result.list, articleLoad: false});
  }

  async getTags () {
    const result = await this.props.get ('/api/label/hot');

    this.setState ({tags: result, tagLoad: false});
  }
}

export default Tool;
