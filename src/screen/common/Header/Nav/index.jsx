import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import './index.less'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      menu: [
        {name: 'Home', selected: true, to: '/'},
        {name: 'Tags', to: '/label'},
        {name: 'Team', to: '/team'},
        {name: 'About', to: '/about'},
        {name: 'Archives', to: '/label'},
        {name: 'Categories', to: '/class'},
      ],
    }
  }

  render() {
    return (
      <nav className="nav">
        <ul className="n-body">{this.renderMenu()}</ul>
      </nav>
    )
  }

  renderMenu() {
    return this.state.menu.map((item, index) => (
      <li
        className={classnames({active: item.selected})}
        key={index}
        onClick={() => this.navigate(item, index)}
      >
        <Link to={item.to}>
          <span>{item.name}</span>
          <em className="n-round" />
        </Link>
      </li>
    ))
  }

  navigate(item, index) {
    // console.log('12312312', this.props)
    let menu = this.state.menu.map(current => {
      current.selected = current === item

      return current
    })

    this.setState({menu})
  }
}
