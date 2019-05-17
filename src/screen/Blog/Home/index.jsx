import React, {Component} from 'react'
import Pagination from '../../../components/Pagination'
import request from '../../../utils/request'
import ArticleItem from '../../../components/ArticleItem/'

import './index.less'

@request()
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div className="home">
        <div className="main-box">
          {
            this.state.list.map((item, index) => <ArticleItem
              key={index}
              data={item}
              toPath={() => this.toPath()}
            />)
          }
        </div>
        <Pagination/>
      </div>
    )
  }

  toPath () {
    return '/blog'
  }

  componentDidMount() {
    this.onLoad();
  }

  async onLoad () {
    const result = await this.props.get('/api/article/list')

    this.setState({list: result.list});
  }
  
}

export default Home
