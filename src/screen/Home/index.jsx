import React, { Component } from 'react'
import request from '../../utils/request'

@request()
class Home extends Component{
  render (){
    return (
      <div>
        首页
      </div>
    )
  }

  componentDidMount () {
    console.log('props', this.props)
    this.props.get('/www.baidu.com/')
  }
}

export default Home
