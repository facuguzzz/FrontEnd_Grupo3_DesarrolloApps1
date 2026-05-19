import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import { InitScreen } from '../screens/InitScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterStep1Screen } from '../screens/RegisterStep1Screen';
import { RegisterStep2Screen } from '../screens/RegisterStep2Screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Init"
        screenOptions={{
          headerShown: false,
          animation: 'fade', // To give a smooth transition effect
        }}
      >
        <Stack.Screen name="Init" component={InitScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ animation: 'slide_from_bottom' }} // Optional different animation for login
        />
        <Stack.Screen 
          name="RegisterStep1" 
          component={RegisterStep1Screen} 
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen 
          name="RegisterStep2" 
          component={RegisterStep2Screen} 
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
