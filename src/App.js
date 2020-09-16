import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import CameraWrapper from './components/CameraWrapper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({navigation}) => ({ 
            title: 'Home Page',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Camera')}
                title="Info"
                color="#00cc00"
              />),
          })}
        />
        <Stack.Screen name="Camera" component={CameraWrapper}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}