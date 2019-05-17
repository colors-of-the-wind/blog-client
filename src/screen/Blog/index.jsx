import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Loadable, { LoadBlog } from '../../utils/loadable'
import { Scrollbars } from 'react-custom-scrollbars';

import './index.less'

const Header = LoadBlog('common/Header/')
const Tool = LoadBlog('common/Tool/')
const Home = LoadBlog('Home/')
const About = LoadBlog('About/')
const Class = LoadBlog('Class/')
const Detail = LoadBlog('Detail/')
const Label = LoadBlog('Label/')
const Team = LoadBlog('Team/')
const Archives = LoadBlog('Archives/')

export default class extends Component {
  render() {
    return (
        <div className="body">
            <div className="sidebar">
                <Header scrollTop={ pos => this.scrollTop(pos) } />
            </div>
            <div className="main">
            <Scrollbars
                ref="mainScroll"
                autoHide
            >
                <div style={ {paddingRight: '15px'} }>
                    <Route exact path="/blog" component={Home} />
                    <Route path="/blog/about" component={About} />
                    <Route path="/blog/class" component={Class} />
                    <Route path="/blog/detail" component={Detail} />
                    <Route path="/blog/label" component={Label} />
                    <Route path="/blog/team" component={Team} />
                    <Route path="/blog/archives" component={Archives} />
                </div>
            </Scrollbars>
            </div>
            <div className="tool">
            <Scrollbars
                ref="toolScroll"
                autoHide
            >
                <div style={ {paddingRight: '10px'} }>
                <Tool />
                </div>
            </Scrollbars>
            </div>
        </div>
    )
  }

  scrollTop (px) {
      this.refs.mainScroll.scrollTop(px)
      this.refs.toolScroll.scrollTop(px)
  }
}
