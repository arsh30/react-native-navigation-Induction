import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// const myGall = [
//   {
//     id: 1,
//     name: 'Pathan',
//     category: 'action',
//     imgUrl:
//       'https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg',
//   },
//   {
//     id: 2,
//     name: 'Humpty Sharma ki DUlhaniya',
//     category: 'action',
//     imgUrl:
//       'https://upload.wikimedia.org/wikipedia/en/4/4e/Humpty_Sharma_Ki_Dulhania_Poster.jpg',
//   },
//   {
//     id: 3,
//     name: 'Varisu',
//     category: 'action',
//     imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/af/Varisu_poster.jpg',
//   },
//   {
//     id: 4,
//     name: 'Veera Simha Rean',
//     category: 'comedy',
//     imgUrl:
//       'https://jswtv.tv/wp-content/uploads/2023/01/Veera-Simha-Reddy-NBKs-non-stop-punches-on-AP-government-1024x768.jpg',
//   },
//   {
//     id: 5,
//     name: 'Jagga Jasoos',
//     category: 'Horror',
//     imgUrl:
//       'https://upload.wikimedia.org/wikipedia/en/9/94/JaggaJasoosPoster.jpg',
//   },
//   {
//     id: 6,
//     name: 'Jaga Jeenda hai',
//     category: 'Comedy',
//     imgUrl: 'https://i.ytimg.com/vi/Zx2NNP2fWsk/maxresdefault.jpg',
//   },
//   {
//     id: 7,
//     name: 'GodFather',
//     category: 'Thriller',
//     imgUrl:
//       'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
//   },
//   {
//     id: 8,
//     name: 'The Dark Knight',
//     category: 'Thriller',
//     imgUrl:
//       'https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg',
//   },
//   {
//     id: 9,
//     name: 'Angry Man',
//     category: 'Horror',
//     imgUrl:
//       'https://m.media-amazon.com/images/M/MV5BNGRlZjVhNWMtOTUxYi00MTYxLWEzOWUtMTM1NDc3ZWRjMDZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
//   },
//   {
//     id: 10,
//     name: 'GodFather 2',
//     category: 'Action',
//     imgUrl:
//       'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
//   },
//   {
//     id: 11,
//     name: 'Harry Potter',
//     category: 'Action',
//     imgUrl:
//       'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
//   },
//   {
//     id: 12,
//     name: 'Seven Samurai',
//     category: 'Comedy',
//     imgUrl:
//       'https://m.media-amazon.com/images/M/MV5BMTQ1MDMxODMyN15BMl5BanBnXkFtZTgwNjM2OTE4MzE@._V1_.jpg',
//   },
//   {
//     id: 13,
//     name: 'La Dolce Vita',
//     category: 'Thriller',
//     imgUrl: 'https://i.ytimg.com/vi/1BeWEPXWDX4/maxresdefault.jpg',
//   },
//   {
//     id: 14,
//     name: 'Citizen Kane',
//     category: 'Thriller',
//     imgUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg',
//   },
//   {
//     id: 15,
//     name: 'In the Mood for Love',
//     category: 'Action',
//     imgUrl:
//       'https://www.eyefilm.nl/uploads/images/posters/poster-In_the_Mood_For_Love.jpg',
//   },
//   {
//     id: 16,
//     name: 'A Space Odyssey',
//     category: 'Thriller',
//     imgUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXoo9NFZqR8VAIn2-IxTK-57JKJtJKOeBxA&usqp=CAU',
//   },
//   {
//     id: 17,
//     name: 'DonT Look uP',
//     category: 'Action',
//     imgUrl:
//       'https://m.media-amazon.com/images/M/MV5BNzk0OWQzMDQtODg1ZC00Yjg2LWJjYzAtNGRjMjE2M2FlYjZjXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg',
//   },
// ];

export default Gallery = () => {
  const renderItems = ({item}) => {
    return (
      <View>
        <Image style={{height: 200, width: 200}} source={{uri: item.imgUrl}} />
      </View>
    );
  }
    const renderItems = ({item}) => {
      return (
        <View>
          <Image
            style={{height: 200, width: 200}}
            source={{uri: item.imgUrl}}
          />
        </View>
      );
    };
  };

  return (
    <View>
      <FlatList data={myGall} renderItem={renderItems} />
    </View>
  );
};

const styles = StyleSheet.create({});
