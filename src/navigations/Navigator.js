import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Cources from '../screens/Cources';
import Xd from '../screens/Xd';
import VideoPage from '../screens/VideoPage';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cources" component={Cources} />
      <Stack.Screen name="Xd" component={Xd} />
      <Stack.Screen name="VideoPage" component={VideoPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
