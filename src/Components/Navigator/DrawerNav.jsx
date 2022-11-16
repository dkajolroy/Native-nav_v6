import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={Sidebar} >
      <Drawer.Screen
        name='BottomTab'
        component={BottomNav}
        options={{
          headerShown: false
        }} />
    </Drawer.Navigator>
  )
}