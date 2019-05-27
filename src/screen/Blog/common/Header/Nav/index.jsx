import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import './index.less';

export default class extends Component {
  constructor () {
    super ();

    this.state = {
      menu: [
        {name: 'Home', selected: true, to: '/blog/'},
        {name: 'Tags', to: '/blog/label'},
        {name: 'Team', to: '/blog/team'},
        {name: 'About', to: '/blog/about'},
        {name: 'Archives', to: '/blog/archives'},
        {name: 'Categories', to: '/blog/class'},
      ],
    };
  }

  render () {
    return (
      <nav className="nav">
        <ul className="n-body">{this.renderMenu ()}</ul>
      </nav>
    );
  }

  renderMenu () {
    return this.state.menu.map ((item, index) => (
      <li
        className={classnames ({active: item.selected})}
        key={index}
        onClick={() => this.navigate (item, index)}
      >
        <Link to={item.to}>
          <span>{item.name}</span>
          <em className="n-round" />
        </Link>
      </li>
    ));
  }

  navigate (item, index) {
    let menu = this.state.menu.map (current => {
      current.selected = current === item;

      return current;
    });
    this.setState ({menu}, () => this.props.scrollTop (0));
  }
}
