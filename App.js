import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';

import Router from './src/config/router'
import { store, persistor } from './src/redux/store'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <PersistGate persistor={persistor} >
          <Root>
            <Router />
          </Root>
          </PersistGate>
        </Provider>
    )
  }
}