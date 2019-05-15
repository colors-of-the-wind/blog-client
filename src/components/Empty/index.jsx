import React from 'react'
import { Empty } from 'antd';

import './index.less'

export default props => <div className="empty">
    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={props.text || '没有数据了呢~'}/>
</div>