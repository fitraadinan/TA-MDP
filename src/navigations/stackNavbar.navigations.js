import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pages from '../pages';
import {faBars, faGraduationCap, faReceipt, faUserGraduate, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const NavStack = createBottomTabNavigator();

function StackNavBar() {
    return (
        <NavStack.Navigator>
            <NavStack.Screen
                name="Characters"
                component={Pages.CharacterPage}
                options={{
                    headerTitle: 'Characters Profile',
                    tabBarIcon: ({color}) => {
                        return <FontAwesomeIcon icon={faUsers} size={20} color={color} />;
                    },
                }}
            />
            <NavStack.Screen
                name="Episode"
                component={Pages.EpisodePage}
                options={{
                    headerTitle: 'Episode',
                    tabBarIcon: ({color}) => {
                        return <FontAwesomeIcon icon={faReceipt} size={20} color={color} />;
                    },
                }}
            />
            <NavStack.Screen
                name="About"
                component={Pages.AboutPages}
                options={{
                    headerTitle: 'About',
                    tabBarIcon: ({color}) => {
                        return <FontAwesomeIcon icon={faBars} size={20} color={color} />;
                    },
                }}
            />
        </NavStack.Navigator>
    );
}
export default StackNavBar;