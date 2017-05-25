/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Container from './components/Container.js';

export default class newProj extends Component {
  render() {
    return (
      <Container />
    );
  }
}

AppRegistry.registerComponent('newProj', () => newProj);
