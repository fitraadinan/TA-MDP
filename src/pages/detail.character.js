import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import characterStyle from '../stylessheets/character.style';
import { useSelector } from 'react-redux';
import detailCharacterStyle from '../stylessheets/detail.character.style';

export default DetailCharacter = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const CharacterReducer = useSelector(state => state.CharacterReducer);

  useEffect(() => {
    setData(CharacterReducer.data);
  }, []);

  return (
    <View style={detailCharacterStyle.container}>
      <Image
        source={{
          uri: data.img,
        }}
        style={detailCharacterStyle.headerImage}
      />
      <View style={detailCharacterStyle.headerBody}>
        <Text style={detailCharacterStyle.headerName}>{data.name}</Text>
        <Text style={detailCharacterStyle.headerDesc}>
          {data.name} has a nickname, namely {data.nickname}.
          In drama serial {data.category}, {data.name} is played by {data.portrayed}.
          The role {data.name} has a status of {data.status} in this drama series.
        </Text>
      </View>
    </View>
  );
};
