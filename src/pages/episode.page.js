import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, FlatList, Text, View } from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import episodeStyle from '../stylessheets/episode.style';

export default StudentPages = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  

  useEffect(() => {
    let isMounted = true;
    Axios.get('https://breakingbadapi.com/api/episodes')
      .then(({ data }) => {
        // console.log("defaultApp -> data", data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailEpisodes', {id: item.id})}>
                <View style={episodeStyle.headerContainer}>
                  <View style={episodeStyle.headerTXT}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: 15 }}>Episode {item.episode}</Text>
                    <Text style={{ fontSize: 15}}>Season {item.season}</Text>
                  </View>
                  <Image source={require('../image/panah.png')} style={episodeStyle.headerPanah}/>
                </View>

              </TouchableOpacity>
            )
          }}
        />
      )}
    </View>
  );
};