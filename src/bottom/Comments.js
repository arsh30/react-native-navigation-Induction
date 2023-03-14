import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';

const commentsArr = [];

const Comments = () => {
  const [inputText, setinputText] = useState('');
  const [myData, setMyData] = useState([]);
  const submit = () => {
    setMyData([...myData, inputText]);
    setinputText('');
  };
  // console.log(inputText);
  // console.log('String data', myData);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          marginVertical: 10,
          display:'flex'
        }}>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
          }}
          style={{height: 30, width: 30, borderRadius: 50, marginLeft: 20}}
        />
        <Text style={{marginLeft: 20, alignSelf: 'center'}}> {item}</Text>
      </View>
    );
  };

  const keyExtractor = (item, index) => {
    return index;
  };
  return (
    <View style={styles.mainContainer}>
      {/* <FlatList
        style={{marginVertical: 20}}
        data={commentsArr}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <Image
                style={styles.imgStyle}
                source={{
                  uri: `https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg`,
                }}
              />

              <View style={styles.infoStyle}>
                <Text style={styles.title}>Pathan</Text>
                <Text style={styles.category}>{item.category}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => {
          return item.id;
        }}
      /> */}
      {/* -------------- ABove code is not working for this ------ */}

      <FlatList
        data={myData}
        renderItem={item => {
          return renderItem(item);
        }}
        keyExtractor={keyExtractor}
      />

      {/* Bottom Input Box */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter your comment"
          value={inputText}
          onChangeText={text => setinputText(text)}
        />

        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: 'rgba(0,0,0,0.7)',
            width: '20%',
            // height: 40,
            // marginVertical: 20,
            // marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
          }}
          onPress={submit}>
          <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  inputStyles: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    fontSize: 20,

    borderColor: 'grey',
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
  },
});
