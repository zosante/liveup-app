import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import AppNavigator from './AppNavigator'
import Header from './Header';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

class App extends Component {
  render(){
  return (<>
      <Header/>
      <AppNavigator/>
      </>
  );
  }
}
export default App;
