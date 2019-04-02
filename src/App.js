import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persist } from './store'
import Main from './screen'

import 'nprogress/nprogress.css'
import './reset.less'

export default class extends Component {
  render() {
    return (
      <Provider store={ store } >
        <PersistGate persistor={ persist } loading={null}>
          <div className="App">
            <Main/>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
