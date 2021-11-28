import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, FlatList, Text, View } from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailCharacter from './detail.character';
import { useNavigation } from '@react-navigation/native';
import characterStyle from '../stylessheets/character.style';
import { useDispatch } from 'react-redux';

export default CharacterPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    Axios.get('https://breakingbadapi.com/api/characters')
      .then(({ data }) => {
        // console.log("defaultApp -> data", data)
        setData(data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: 'FILL_DATACHARACTER',
                    inputValue: item,
                  });
                  navigation.navigate('DetailCharacter');
                }}>
                <View style={characterStyle.headerContainer}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={characterStyle.headerImage}
                  />
                  <View style={characterStyle.headerTXT}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      The cast is {item.portrayed}
                    </Text>
                  </View>
                  <Image
                    source={require('../image/panah.png')}
                    style={characterStyle.headerPanah}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
