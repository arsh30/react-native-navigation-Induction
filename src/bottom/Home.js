import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import CardDetails from '../components/CardDetails';

const Home = ({navigation}) => {
  const CardDetails = () => {
    return (
      <View style={styles.mainContainer}>
        <Text>Hello</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('../../assets/menu.webp')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 20}}>
          React Navigation
        </Text>
      </View>

      {/* ADD CONTENT : Food IMage*/}
      {/* <Image
        source={require('../../assets/')}
        style={{
          width: '90%',
          height: 170,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />
      <Text>Indian Thali</Text> */}

      <CardDetails />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
