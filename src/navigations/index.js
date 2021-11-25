import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavBar from './stackNavbar.navigations';
import Pages from '../pages';
import aboutPage from '../pages/about.page';
import detailCharacter from '../pages/detail.character';
import { Provider } from 'react-redux';
import { store } from '../redux';

const Stack = createStackNavigator();

class Navigator extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Nav"
                            component={StackNavBar}
                            options={{
                                headerStyle: {
                                    shadowOpacity: 0,
                                    elevation: 0,
                                },
                                headerTitle: null,
                                headerShown: null,
                            }}
                        />
                        <Stack.Screen
                            name="DetailCharacter"
                            component={DetailCharacter}
                            options={{
                                headerStyle: {
                                    shadowOpacity: 0,
                                    elevation: 0,
                                },
                                headerTitle: null,
                                headerShown: null,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default Navigator;
