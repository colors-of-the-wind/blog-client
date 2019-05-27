import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'nprogress/nprogress.css';
import './reset.less';

import {store, persist} from './store';
import Main from './screen';

export default class extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <div className="App">
            <Main />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
