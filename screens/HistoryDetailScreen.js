import { View, ScrollView, Text, ImageBackground, Pressable } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { globalStyles } from '../GlobalStyles.js'
import { doc, deleteDoc } from 'firebase/firestore'
import { Alert, Button } from 'react-native'
import { database } from '../firebase.js'

export default function HistoryDetailScreen({ route, navigation }) {
    const { session } = route.params
    const location = session.location

    const handleDelete = async () => {
  Alert.alert('Delete session', 'Are you sure?', [
    { text: 'Cancel' },
    {
      text: 'Delete',
      style: 'destructive',
      onPress: async () => {
        await deleteDoc(doc(database, 'sessions', session.id))
        navigation.goBack()
      },
    },
  ])
}

    return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >

            <ScrollView>
                <View style={globalStyles.group}> 
                    <Text style={globalStyles.title}>General</Text>
                    <Text style={globalStyles.statText}>Score: {session.score}</Text>
                    <Text style={globalStyles.statText}>Type of session: {session.sessionType}</Text>
                    <Text style={globalStyles.statText}>Players: {session.playersCount}</Text>
                    <Text style={globalStyles.statText}>Pitch type: {session.pitchType}</Text>
                </View>

                <View style={globalStyles.group}> 
                    <Text style={globalStyles.title}>Personal</Text>
                    <Text style={globalStyles.statText}>Position: {session.position}</Text>
                    <Text style={globalStyles.statText}>Left footed goals: {session.goalsLeft}</Text>
                    <Text style={globalStyles.statText}>Right footed goals: {session.goalsRight}</Text>
                    <Text style={globalStyles.statText}>Header goals: {session.goalsHeader}</Text>
                    <Text style={globalStyles.statText}>Assists: {session.assists}</Text>
                    <Text style={globalStyles.statText}>Steps: {session.steps}</Text>
                </View>
                
                <View style={globalStyles.group}> 
                <Text style={globalStyles.title}>Miscellaneous</Text>
                    <Text style={globalStyles.statText}>Weather degrees: {session.weatherDegrees}</Text>
                    <Text style={globalStyles.statText}>Hours slept: {session.sleepHours}</Text>
                </View>

                <View style={globalStyles.group}> 
                {location && (
                    <MapView
                        style={{ width: '100%', height: 220, marginTop: 12 }}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker coordinate={location} />
                    </MapView>
                )}
                </View>
                <Pressable style={globalStyles.deleteButton} onPress={handleDelete} >
                    <Text style={globalStyles.deleteText}>Delete session</Text>
                </Pressable>
            </ScrollView>
        </ImageBackground>
    )
}