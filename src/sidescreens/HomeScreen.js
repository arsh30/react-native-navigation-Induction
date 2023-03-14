import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../bottom/Home';
import Setting from '../bottom/Setting';

import Posts from '../bottom/Posts';
import Gallery from '../screens/Gallery';
import Comments from '../bottom/Comments';

const Bottom = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Bottom.Navigator>
      {/* <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/home.png')}
              style={{width: 30, height: 30, tintColor: color}}
            />
          ),
        }}
      /> */}

      {/* We have 2 options, niche jo icon h unko change kr skte hai 
    ya to react-native vector icons and other wise apne khud ke custome icons
    use kr skte hai we use custom image
    */}

      {/* <Bottom.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/settings.png')}
              style={{width: 30, height: 30, tintColor: color}}
            />
          ),
        }}
      /> */}

      <Bottom.Screen
        name="Posts"
        component={Posts}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/posts.jpg')}
              style={{width: 30, height: 30, tintColor: color}}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="Comments"
        component={Comments}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/comments.png')}
              style={{width: 30, height: 30, tintColor: color}}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="Gallery"
        component={Gallery}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/gallery.jpg')}
              style={{width: 30, height: 30, tintColor: color}}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
