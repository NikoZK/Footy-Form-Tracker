import { View, Text, Pressable, Image, ImageBackground } from 'react-native'
import { globalStyles } from '../GlobalStyles.js'
import { useAuth } from '../context/AuthContext.js'

export default function HomeScreen({ navigation }) {
    const { logout } = useAuth()

    return (

          <ImageBackground
            source={require('../assets/background.jpg')}
            style={{ flex: 1 }}
            resizeMode="cover"
          >
    <View style={globalStyles.homeOverlay}>

        <Image
         source={require('../assets/new-logo.png')}
         style={{ height: '50%', aspectRatio: 1, resizeMode: 'contain' }}
        />

      <View style={globalStyles.card}>
        <Pressable style={globalStyles.button} onPress={() => navigation.navigate('CreateSession')}>
          <Text style={globalStyles.buttonText}>Create New Session</Text>
        </Pressable>

        <Pressable style={globalStyles.button} onPress={() => navigation.navigate('History')}>
          <Text style={globalStyles.buttonText}>View History</Text>
        </Pressable>

        <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Stats')}>
          <Text style={globalStyles.buttonText}>View Stats</Text>
        </Pressable>

        <Pressable style={globalStyles.button} onPress={logout}>
          <Text style={globalStyles.buttonText}>Log out</Text>
        </Pressable>
      </View>
        </View>
        </ImageBackground>
    )
}