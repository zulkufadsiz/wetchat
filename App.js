import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';
import Chat from './components/Chat';
import {createStackNavigator} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
