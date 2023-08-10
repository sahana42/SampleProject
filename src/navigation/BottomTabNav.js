import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'save' : 'save-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={Tab1} />
      <Tab.Screen name="Saved" component={Tab2} />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
