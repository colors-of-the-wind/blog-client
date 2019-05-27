import React, { Component } from 'react'
import { Layout, Menu, Icon, Avatar, Popconfirm, Breadcrumb } from 'antd';

import './index.less'

const { Header, Sider, Content } = Layout;
const { SubMenu, Item } = Menu

export default class extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            Admin
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="form" />
                  <span>文章</span>
                </span>
              }
            >
              <Item key="1">文章列表</Item>
              <Item key="2">草稿箱</Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="tags" />
                  <span>分组</span>
                </span>
              }
            >
              <Item key="5">标签</Item>
              <Item key="6">分类</Item>
              <Item key="7">归档</Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="setting" />
                  <span>设置</span>
                </span>
              }
            >
              <Item key="9">用户设置</Item>
              <Item key="10">博客设置</Item>
              <Item key="11">团队设置</Item>
              <Item key="12">错误收集</Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Popconfirm
              placement="bottomRight"
              title="是否要退出当前系统？"
              okType="danger"
              okText="退出"
              cancelText="取消"
            >
              <div className="avatar">
                <Avatar size="small" src="https://raw.githubusercontent.com/AaronBank/static-files/master/images/tool-logo.jpg"/>
                <span className="userName">Array</span>
              </div>
            </Popconfirm>
          </Header>
          <Layout className="content">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}