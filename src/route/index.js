import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Detail, Home} from '../screens';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
