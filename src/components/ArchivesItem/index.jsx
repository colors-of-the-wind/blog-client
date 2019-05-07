import React, {PureComponent} from 'react'
import {Skeleton} from 'antd'

import ArticleLabel from '../ArticleLabel/'

import './index.less'
export default class extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {
                    time:2019,
                    cells:[
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        }
                    ]
                },
                {
                    time:2019,
                    cells:[
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        }
                    ]
                },
                {
                    time:2019,
                    cells:[
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        }
                    ]
                },
                {
                    time:2019,
                    cells:[
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        },
                        {
                            tag:'FEB',time:'02-01',title:'文章标题'
                        }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <div className="archives-item-wrap">
                    {
                        this.state.list.map((item,itemIndex)=>{
                            return <Item item={item} itemIndex={itemIndex}></Item>
                        })
                    }
            </div>
        )
    }
}
class Item extends  React.PureComponent {
    render() {
        const {item,itemIndex} = this.props
        return <div className="item-wrap">
                    <span className="item-year">{item.time}</span>
                    {
                        item.cells.map((cell,cellIndex)=>{
                            return <ItemCell cell={cell} itemIndex={itemIndex} cellIndex={cellIndex}></ItemCell>
                        })
                    }
                </div>

    }
}
class ItemCell extends  React.PureComponent {
    constructor(props){
        super(props);
        // this.pushDetailView = this.pushDetailView.bind(this);
    }
    pushDetailView(itemIndex,cellIndex){
        // console.log(self)
        // let list = this.state.list;
        // list[itemIndex].cells.push(
        //     {
        //     tag:'FEB',time:'02-01',title:'文章标题(新增)'
        //     }
        // )
        // this.setState({
        //     list
        // })
        alert('进入文章详情');
    }
    render() {
        const {cell,cellIndex,itemIndex} = this.props
        return <div className="item-cell" onClick={this.pushDetailView.bind(this)}>
                    <span className="item-cell-tag">{cell.tag}</span>
                    <span className="item-cell-h">-</span>
                    <span className="item-cell-time">{cell.time}</span>
                    <span className="item-cell-title">{cell.title}</span>
                </div>

    }
}


