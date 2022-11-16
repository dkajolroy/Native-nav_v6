import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../../Screen/CartScreen';
import HomeScreen from '../../Screen/HomeScreen';
import { Image } from 'react-native';
import home from '../../Assets/home.png'
const Bottom = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        <Image
                            style={{ tintColor: color, width: 50, height: 50 }}
                            source={home} />
                    },
                    headerShown: false
                }} />
            <Bottom.Screen
                name='CartScreen'
                component={CartScreen}
                options={{ headerShown: false }} />
        </Bottom.Navigator>
    )
}