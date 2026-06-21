import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { useAuth } from './context/AuthContext.js'

import LoginScreen from './screens/LoginScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import CreateSessionScreen from './screens/CreateSessionScreen.js'
import HistoryScreen from './screens/HistoryScreen.js'
import HistoryDetailScreen from './screens/HistoryDetailScreen.js'
import StatsScreen from './screens/StatsScreen.js'

export default function App() {
  const Stack = createNativeStackNavigator()
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {!user && <LoginScreen />}
      {user && (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen} options={{headerTintColor: '#51833a'}}/>
          <Stack.Screen name='CreateSession' component={CreateSessionScreen} options={{headerBackTitle: 'Reset', headerTintColor: '#51833a', headerTitle: 'Create Session'}}/>
          <Stack.Screen name='History' component={HistoryScreen} options={{headerBackTitle: 'Back', headerTintColor: '#51833a'}}/>
          <Stack.Screen name='HistoryDetail' component={HistoryDetailScreen} options={{headerBackTitle: 'Back', headerTintColor: '#51833a', headerTitle: 'Session Details'}}/>
          <Stack.Screen name='Stats' component={StatsScreen} options={{headerBackTitle: 'Back', headerTintColor: '#51833a'}}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
