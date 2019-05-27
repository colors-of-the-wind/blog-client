import React from 'react';
import {Pagination} from 'antd';

import './index.less';

export default props => (
  <div className="pagination">
    <Pagination {...props} />
  </div>
);
