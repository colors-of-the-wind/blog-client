import React, {Component} from 'react'
// import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
// import { createBrowserHistory, createHashHistory } from 'history'
import {BrowserRouter, Route} from 'react-router-dom'
import loadable from '../utils/loadable'

const Blog = loadable('Blog/', '博客')
const Admin = loadable('Admin/', '后台系统')
const NoPermission = loadable('403', '403')
const NotFound = loadable('404', '40')

const history = createBrowserHistory()

window._router = history

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <ConnectedRouter history={ history }> */}
          <Route path="/admin" component={Admin} />
          <Route path="/blog" component={Blog} />
          <Route path="/403" component={NoPermission} />
          <Route path="/404" component={NotFound} />
        {/* </ConnectedRouter> */}
      </BrowserRouter>
    )
  }
}
