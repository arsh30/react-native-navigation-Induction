import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: '100%',
            backgroundColor: 'black',
            height: 150,
          }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: `https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
              }}
              style={{height: 30, height: 30}}
            />
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: `https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg`,
            }}
            style={{
              height: 130,
              width: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
          />
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              padding: 10,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'grey',
              //   padding:10
              fontWeight: 'bold',
            }}>
            23,Male
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            padding: 20,
            alignItems: 'center',
            width: '90%',
            borderRadius: 10,
            backgroundColor: '#fff',
            paddingBottom: 22,
            shadowOpacity: 80,
            justifyContent: 'center',
            margin: 10,

            shadowOpacity: 0.23,
            shadowRadius: 1,

            elevation: 4,
          }}>
          {/* <Image
            source={{
              uri: `https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-work-bag-icon-png-image_1871545.jpg`,
            }}
            style={{height: 35, width: 35, borderRadius: 100, color: '#818181'}}
          /> */}
          <Text style={{fontSize: 18, marginLeft: 10}}>Services</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            padding: 20,
            alignItems: 'center',
            width: '90%',
            borderRadius: 10,
            backgroundColor: '#fff',
            marginBottom: 10,
            shadowOpacity: 80,
            justifyContent: 'center',

            shadowOpacity: 0.23,
            shadowRadius: 1,

            elevation: 4,
          }}>
          {/* <Image
            source={{
              uri: `https://cdn5.vectorstock.com/i/1000x1000/33/44/location-icon-vector-24263344.jpg`,
            }}
            style={{height: 35, width: 35, borderRadius: 100}}
          /> */}
          <Text style={{fontSize: 18, marginLeft: 10}}>
            Netaji Subash Place
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            padding: 20,
            alignItems: 'center',
            width: '90%',
            borderRadius: 10,
            backgroundColor: '#fff',
            paddingBottom: 22,
            shadowOpacity: 80,
            justifyContent: 'center',
            marginBottom: 10,

            shadowOpacity: 0.23,
            shadowRadius: 1,

            elevation: 4,
          }}>
          {/* <Image
            source={{
              uri: `https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-work-bag-icon-png-image_1871545.jpg`,
            }}
            style={{height: 35, width: 35, borderRadius: 100}}
          /> */}
          <Text style={{fontSize: 18, marginLeft: 10}}>+91 123-123-123</Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            padding: 20,
            alignItems: 'center',
            width: '90%',
            borderRadius: 10,
            backgroundColor: '#fff',
            paddingBottom: 22,
            shadowOpacity: 80,
            justifyContent: 'center',

            shadowOpacity: 0.23,
            shadowRadius: 1,
            backgroundColor: '#000',
            color: 'white',

            elevation: 4,
          }}>
          {/* <Image
            source={{
              uri: `https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-work-bag-icon-png-image_1871545.jpg`,
            }}
            //style={{height: 35, width: 35, borderRadius: 100}}
          /> */}
          <Text style={{fontSize: 18, marginLeft: 10,color:'white'}}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
