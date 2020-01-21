import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './src/config/config'


export default class App extends Component {
  render() {
    return (
      <Router />
    )
  }
}