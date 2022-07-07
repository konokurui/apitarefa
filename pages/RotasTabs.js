import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home.js';

import Pesquisar from "./Pesquisar.js";

import Personagens from "./Personagens.js";





const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen

            name="Home"

            component={Home}

            options = {{

                tabBarIcon:({color,size})=><MaterialCommunityIcons name="atom-variant" color={color} size={size}/>}}
            />
            <Tab.Screen

            name="Personagens"

            component={Personagens}

            options = {{

                tabBarIcon:({color,size})=><MaterialCommunityIcons name="bicycle-basket" color={color} size={size}/>}}
            />
            <Tab.Screen

            name="Pesquisar"

            component={Pesquisar}

            options = {{

                tabBarIcon:({color,size})=><MaterialCommunityIcons name="bat" color={color} size={size}/>}}
            />

        </Tab.Navigator>
    )
}