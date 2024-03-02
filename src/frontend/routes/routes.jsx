import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export default function Routes() {
  const StackNavigation = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <StackNavigation.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
