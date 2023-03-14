import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDetails from '../components/CardDetails';

const Posts = () => {
  return (
    <View style={styles.container}>
      <CardDetails />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#6c5ce7',
    alignItems: 'center',
  },
});
