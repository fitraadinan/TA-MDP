import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, FlatList, Text, View } from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import DetailDeath from './detail.death';
import deathStyle from '../stylessheets/death.style';

export default DeathPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    Axios.get('https://breakingbadapi.com/api/deaths')
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
                onPress={() => {
                  dispatch({
                    type: 'FILL_DATADEATH',
                    inputValue: item,
                  });
                  navigation.navigate('DetailDeath');
                }}>
                <View style={deathStyle.headerContainer}>
                  <Image source={require('../image/episode.png')} style={deathStyle.headereps} />
                  <View style={deathStyle.headerTXT}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.death}</Text>
                  </View>
                  <Image source={require('../image/panah.png')} style={deathStyle.headerPanah} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
