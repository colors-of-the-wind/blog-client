import React, { Component } from 'react'
// import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
// import { createBrowserHistory, createHashHistory } from 'history'
import createHashHistory from 'history/createHashHistory'
import { BrowserRouter, HashRouter, Route, Link  } from 'react-router-dom'
import config from '../config';
import loadable from '../utils/loadable'

const Home = loadable('Home/')
const About = loadable('About/')
const Class = loadable('Class/')
const Detail = loadable('Detail/')
const Label = loadable('Label/')
const Admin = loadable('Admin/')
const Team = loadable('Team/')
const NoPermission = loadable('403')
const NotFound = loadable('404')

let createHistory = createHashHistory;

let ModelRouter = HashRouter;

if (config.env !== 'production') {
  createHistory = createBrowserHistory;
  ModelRouter = BrowserRouter;
}

const history = createHistory();

window._router = history

export default class extends Component {
  render() {
    return (
        <ModelRouter>
            {/* <ConnectedRouter history={ history }> */}
              <div>
                  <div>
                      <Link to="/about"> about </Link> 
                      <Link to="/class"> class </Link> 
                      <Link to="/detail"> detail </Link> 
                      <Link to="/label"> label </Link> 
                      <Link to="/team"> team </Link> 
                      <Link to="/admin"> admin </Link> 
                      <Link to="/403"> 去403 </Link> 
                      <Link to="/"> 去首页 </Link> 
                  </div>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/class" component={Class} />
                  <Route path="/detail" component={Detail} />
                  <Route path="/label" component={Label} />
                  <Route path="/team" component={Team} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/403" component={NoPermission} />
                  <Route path="/404" component={NotFound} />
              </div>
            {/* </ConnectedRouter> */}
        </ModelRouter>
    );
  }
}
