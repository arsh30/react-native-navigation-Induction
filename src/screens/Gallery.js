import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

// const gallery = [
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

let limit = 10;
let loadMore = true;

const Gallery = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let query = `?skip=${skip}&limit=${limit}`;
      const response = await fetch('https://dummyjson.com/products' + query);
      const res = await response.json();
      console.log('Api response', res);
      if (res.products.length == 0) {
        loadMore = false;
      }
      setData([...data, ...res.products]);
      // jo prvs data hoga uske sath humne current data daldiya
      setSkip(skip + 10);
      // note: jitni upr limit rkhi hai, utni hi  value rakhege
      // bcoz skip krne ke baad latest item de

      setIsLoading(false);
    } catch (error) {
      console.log('Error during Fetch method', error);
    }
  };

  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={styles.flatListStyle}>
          <Image
            source={{uri: item.thumbnail}}
            style={{width: 150, height: 150, borderRadius: 8}}
          />

          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text>{item.brand}</Text>
            <Text>{item.price}</Text>
          </View> */}

          {/* doubt */}
          {/* <Text>{item.description}</Text> */}
          {/* --- */}
        </View>
      );
      // ye dubatra regerate tbb hoga jb data change hoga,
      // It is used taki application ki performance inc hoje
    },
    [data],
  );

  const keyExtractor = useCallback((item, index) => {
    return index.toString();
  });

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}}></View>;
  }, [data]);

  const onEndReached = () => {
    Alert.alert('End Reached');
    // jese hi end reached hoga toh api dubara cal krwaege but skip ki values ko
    // increase krdege

    if (loadMore) {
      // agr ye true hua toh hi call krwaege APi
      fetchData();
    }
  };

  const listFooterComponent = () => {
    return <ActivityIndicator style={{marginVertical: 16, size: 'large'}} />;
  };
  return (
    <View style={{marginHorizontal: 16, margin: 20}}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator style={{marginVertical: 16}} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparatorComponent}
          onEndReached={onEndReached}
          ListFooterComponent={listFooterComponent}
          // horizontal={true}
          numColumns={2}
          style={{margin: 10}}
        />
      )}
      {/* Logic to add pagination  */}
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.28,
    shadowRadius: 1.42,

    elevation: 2,
    backgroundColor: 'white',
    padding: 8,
    margin: 2,
    borderRadius: 8,
  },

  loader: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    size: 'large',
  },
});

export default Gallery;
