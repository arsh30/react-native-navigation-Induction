import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../sidescreens/HomeScreen';
import Gallery from './Gallery';
import Sidebar from './Sidebar';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
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
