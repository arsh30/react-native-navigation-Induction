import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash.js';
import MainScreen from './screens/MainScreen.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="Posts"
          component={Posts}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
      {/* <Text>AppNavigator</Text> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
