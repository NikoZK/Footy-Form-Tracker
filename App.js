import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from './screens/HomeScreen.js'
import CreateSessionScreen from './screens/CreateSessionScreen.js';
import HistoryScreen from './screens/HistoryScreen.js';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='CreateSession' component={CreateSessionScreen}/>
        <Stack.Screen name='History' component={HistoryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
