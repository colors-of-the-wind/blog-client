import React, {Component} from 'react'
import { Pagination } from 'antd'

import './index.less'

export default class extends Component {
    render () {
        return <div className="pagination">
            <Pagination total={50} showSizeChanger showQuickJumper />
        </div>
    }
}