import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import BottomTabNav from './src/navigation/BottomTabNav';
// import DrawerNav from './src/navigation/DrawerNav';



const Stack = createStackNavigator();

function App() {
return (
<NavigationContainer>
   <BottomTabNav/>
   {/* <DrawerNav/> */}
  </NavigationContainer>
  );

}

export default App;