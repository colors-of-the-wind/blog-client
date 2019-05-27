import React, {PureComponent} from 'react';

import './index.less';

export default class extends PureComponent {
  render () {
    return (
      <div className="template">
        <h3 className="t-title">{this.props.title}</h3>
        <div className="t-body">{this.props.children}</div>
      </div>
    );
  }
}
