import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigations/Navigator';
import {SafeAreaView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}
