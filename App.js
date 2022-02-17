/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import  {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AddItem from './screens/AddItem';
import List from './screens/List';
import Login from './screens/Login';


const Stack = createStackNavigator();

function App () {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddItem" component={AddItem} />
    <Stack.Screen name="List" component={List} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
 container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center'
 }
});

export default App;
