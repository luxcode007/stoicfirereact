import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homepage from './views/homepage';  // Adjust the path to your HomePage component

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homepage} />
        {/* Add more Stack.Screen components as you add more views */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


