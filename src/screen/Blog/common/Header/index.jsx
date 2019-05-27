import React, {Component} from 'react';
import request from '../../../../utils/request';

import Nav from './Nav/';
import './index.less';

@request ()
class Header extends Component {
  constructor (props) {
    super (props);

    this.state = {
      name: '',
      logo: '',
      phrase: '',
      copyright: '',
    };
  }

  render () {
    return (
      <div className="head">
        <div className="main-columns">
          <div className="logo">
            {this.state.logo &&
              <img className="img" src={this.state.logo} alt="logo" />}
          </div>
          <h3 className="name">{this.state.name}</h3>
          <p className="info">{this.state.phrase}</p>
        </div>
        <div className="bottom-half">
          <Nav scrollTop={this.props.scrollTop} />
          <div
            className="foot"
            onClick={() => this.props.setPosition ({top: 0})}
          >
            <p>Copyright © 2019 风的颜色</p>
            <p>{this.state.copyright}</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.getBlogInfo ();
  }

  async getBlogInfo () {
    const result = await this.props.get ('/api/global/blogInfo');

    this.setState ({...result});
  }
}

export default Header;
