import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import aboutStyle from '../stylessheets/about.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default AboutPages = () => {

    return (
            <View style={aboutStyle.container}>
                <Image
                    source={{ uri: 'https://flxt.tmsimg.com/assets/p185846_b_h10_ac.jpg' }}
                    style={aboutStyle.headerImage}
                />
                <Text style={aboutStyle.headerHello}>Hello everyone!</Text>
                <View><Text style={aboutStyle.headerBodyTXT}>Thank you for using this application.</Text></View>

                <Text style={aboutStyle.headerBodyTXT}>
                    This application is an application to know about the drama series Breaking Bad.
                    Breaking Bad is an American crime drama TV series, written and produced by Vince Gilligan.
                    The show aired on AMC for 5 seasons, from January 20, 2008 to September 29, 2013.
                    Breaking Bad has 5 seasons and 62 episodes.
                    
                </Text>
                <Text style={{ fontSize: 15, marginHorizontal: 27, marginVertical: 10, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    Hope you like this application and this application can be useful.
                </Text>
                <Text style={aboutStyle.headerLink}>
                    You can watch Breaking Bad on the Netflix app by clicking the link below.
                </Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.netflix.com/id-en/title/70143836')}>
                        <Text style={{ color: 'blue' }}>https://www.netflix.com/id-en/title/70143836</Text>
                </TouchableOpacity>
            </View>
    );
}
