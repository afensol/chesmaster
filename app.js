import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import LearnScreen from './src/screens/LearnScreen';
import PuzzleScreen from './src/screens/PuzzleScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OpeningList from './src/screens/OpeningList';
import OpeningDetail from './src/screens/OpeningDetail';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="Puzzles" component={PuzzleScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="OpeningList" component={OpeningList} options={{ headerShown: true, title: 'Açılış Repertuarı', headerTintColor: '#fff', headerStyle: {backgroundColor: '#121212'} }} />
        <Stack.Screen name="OpeningDetail" component={OpeningDetail} options={{ headerShown: true, title: 'Çalışma Modülü', headerTintColor: '#fff', headerStyle: {backgroundColor: '#121212'} }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}