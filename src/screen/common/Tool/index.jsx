import React, {Component} from 'react'

import {Input, List, Tag} from 'antd'

import ToolTemplate from '../../../components/ToolTemplate/'

import {rangeRandom} from '../../../utils/random'

import './index.less'

const Search = Input.Search

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
]


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
]

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
        'Los Angeles battles huge wildfires.',
        'Los Angeles battles huge wildfires.',
        'Los Angeles battles huge wildfires.'
      ],
      tags: [
        1,2,3,4,5,6,7,8,9,0,1,2
      ]
    }
  }

  render() {
    return (
      <div className="tool">
        <ToolTemplate title="全站搜索">
          <Search
            placeholder="搜索内容..."
            onSearch={value => console.log(value)}
            style={{width: '100%'}}
          />
        </ToolTemplate>
        <ToolTemplate title="热门文章">
          <List
            size="small"
            // loading
            split={false}
            dataSource={this.state.articles}
            renderItem={item => (
              <List.Item className="tool-item">{item}</List.Item>
            )}
          />
        </ToolTemplate>
        <ToolTemplate title="热门标签">
          <List
            size="small"
            // loading
            split={false}
            dataSource={this.state.tags}
            renderItem={item => this.renderItem(item)}
          />
        </ToolTemplate>
      </div>
    )
  }

  renderItem(text) {
    const currentRange = rangeRandom(0, colors.length - 1)
    const currentColor = colors[currentRange]
    return (
      <Tag color={currentColor} className="tool-tag">
        text
      </Tag>
    )
  }
}
