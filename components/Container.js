import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from '../redux/reducers';
import App from './App';

let store = createStore(todoApp);

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <App />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 45,
    backgroundColor: '#ecf0f1',
    padding: 20
  }
});
