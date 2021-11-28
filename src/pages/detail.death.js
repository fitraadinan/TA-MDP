import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import detailDeathStyle from '../stylessheets/detail.death.style';

export default DetailDeath = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const DeathReducer = useSelector(state => state.DeathReducer);

  useEffect(() => {
    setData(DeathReducer.data);
  }, []);

  return (
    <View style={detailDeathStyle.container}>
      <Image
        source={
          require('../image/eps.png')}
        style={detailDeathStyle.headerImage}
      />
      <View style={detailDeathStyle.headerBody}>
        <Text style={detailDeathStyle.headerName}>{data.death}</Text>
        <Text style={detailDeathStyle.headerDesc}>
        The death case of {data.death} is due to {data.cause} 
        In that case the one who is responsible is {data.responsible}. 
        This case of death occurred in episode {data.episode} in season {data.season} Breaking Bad. 
        The last word in this case is "{data.last_words}".
        </Text>
      </View>
      {/* <View>
        <Text >{data}</Text>
      </View> */}

    </View>
  );
};
