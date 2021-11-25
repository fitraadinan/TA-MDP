import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import characterStyle from '../stylessheets/character.style';
import {useSelector} from 'react-redux';

export default DetailCharacter = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const CharacterReducer = useSelector(state => state.CharacterReducer);
  // const id = 4;

  useEffect(() => {
    setData(CharacterReducer.data);
  }, []);
  // useEffect(() => {
  //   let isMounted = true;
  //   Axios.get('https://breakingbadapi.com/api/characters/'+ id)
  //     .then(({ data }) => {
  //       console.log("data = ", data)
  //       setData(data)
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  console.log(CharacterReducer.data.name);
  console.log('diatas');
  return (
    <View style={characterStyle.headerTXT}>
      {/* <Text style={aboutStyle.headerHello}>Hello everyone!</Text>
      <View><Text style={aboutStyle.headerBodyTXT}>Thank you for using this application.</Text></View> */}
      <View style={characterStyle.headerTXT}>
        <Text style={{paddingBottom: 10, fontSize: 20, fontWeight: 'bold'}}>
          {data.name}
        </Text>
        <Text style={{fontSize: 15}}>{data.category}</Text>
      </View>
    </View>
  );
};
