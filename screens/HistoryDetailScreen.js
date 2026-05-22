import { View, ScrollView, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { globalStyles } from '../GlobalStyles.js'

export default function SessionDetailsScreen({ route }) {
    const { session } = route.params

    const location = session.location

    return (
        <View style={globalStyles.screen}>
            <ScrollView style={globalStyles.card}>

                <Text style={globalStyles.label}>Type of session: {session.sessionType}</Text>
                <Text style={globalStyles.label}>Score: {session.score}</Text>
                <Text style={globalStyles.label}>Players: {session.playersCount}</Text>
                <Text style={globalStyles.label}>Position: {session.position}</Text>
                <Text style={globalStyles.label}>Left footed goals: {session.goalsLeft}</Text>
                <Text style={globalStyles.label}>Right footed goals: {session.goalsRight}</Text>
                <Text style={globalStyles.label}>Header goals: {session.goalsHeader}</Text>
                <Text style={globalStyles.label}>Assists: {session.assists}</Text>
                <Text style={globalStyles.label}>Steps: {session.steps}</Text>

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
            </ScrollView>
        </View>
    )
}