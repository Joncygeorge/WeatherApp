import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './Components/HomePage';
// import CameraPage from './Components/CameraPage';
import LocationPage from './Components/LocationPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        {/* <Tab.Screen name="Camera" component={CameraPage} /> */}
        <Tab.Screen name="Location" component={LocationPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
