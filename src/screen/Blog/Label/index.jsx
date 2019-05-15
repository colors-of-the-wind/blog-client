import React, {Component} from 'react'
import request from '../../../utils/request'
import Empty from '../../../components/Empty'
import './index.less'

@request()
class Label extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div className="label">
        {
          !!this.state.list.length ? <ul className="l-box">
            {
              this.state.list.map((item, index) => <li key={ index }>
                <div className="l-item-box">
                  <img className="l-item-img" src={item.icon} alt={item.labelName}/>
                  <div className="l-item-content">
                    <h6 className="l-item-title">{item.labelName}</h6>
                    <p className="l-item-number">{item.count} 文章</p>
                  </div>
                </div>
              </li>)
            }
          </ul> : <Empty text="没有标签数据了呢~"/>
        }
      </div>
    )
  }

  componentDidMount () {
    this.onLoad()
  }

  async onLoad () {
    const result = await this.props.get('/api/label/list')

    this.setState({ list: result })
  }
}

export default Label