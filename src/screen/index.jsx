import React, {Component} from 'react'
// import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
// import { createBrowserHistory, createHashHistory } from 'history'
import {BrowserRouter, Route} from 'react-router-dom'
import loadable from '../utils/loadable'

import './index.less'

const Header = loadable('common/Header/')
const Tool = loadable('common/Tool/')
const Home = loadable('Home/')
const About = loadable('About/')
const Class = loadable('Class/')
const Detail = loadable('Detail/')
const Label = loadable('Label/')
const Admin = loadable('Admin/')
const Team = loadable('Team/')
const Archives = loadable('Archives/')
const NoPermission = loadable('403')
const NotFound = loadable('404')

const history = createBrowserHistory()

window._router = history

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <ConnectedRouter history={ history }> */}
        <div className="body">
          <div className="sidebar">
            <Header />
          </div>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/class" component={Class} />
            <Route path="/detail" component={Detail} />
            <Route path="/label" component={Label} />
            <Route path="/team" component={Team} />
            <Route path="/admin" component={Admin} />
            <Route path="/archives" component={Archives} />
            <Route path="/403" component={NoPermission} />
            <Route path="/404" component={NotFound} />
          </div>
          <div className="tool">
            <Tool />
          </div>
        </div>
        {/* </ConnectedRouter> */}
      </BrowserRouter>
    )
  }
}
