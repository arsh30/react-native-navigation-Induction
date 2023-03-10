import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Sidebar = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 5, width: '100%', backgroundColor: 'blue'}}></View>
      <Text>Sidebar</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Sidebar;
