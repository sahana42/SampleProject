import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
