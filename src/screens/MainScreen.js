import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../sidescreens/HomeScreen';
import Gallery from './Gallery';
import Sidebar from './Sidebar';
import Setting from '../bottom/Setting';

const Drawer = createDrawerNavigator();
/*
ik wrapper chaiye jisme sare routes register krte hai


*/

const MainScreen = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{width: 280}}
      // drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />

      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{headerShown: true}}
      />

      {/* is andr jitni bhi screen bnegi
      VO SIDE PR AATI JAEGI , IDR 1 HI ROUTE RKHEGE/}

      {/* <Drawer.Screen
        name="Gallery"
        component={Gallery}
        options={{headerShown: true}}
      /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
