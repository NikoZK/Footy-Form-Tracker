import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import { app, database } from '../firebase.js'
import MapView, { Marker } from 'react-native-maps'
import { globalStyles } from '../GlobalStyles.js';

export default function CreateSessionScreen({ navigation }) {
    const [sessionDocId, setSessionDocId] = useState(null)
    const [sessionType, setSessionType] = useState('')
    const [playersCount, setPlayersCount] = useState('')
    const [weather, setWeather] = useState('')
    const [pitchType, setPitchType] = useState('')
    const [sleepHours, setSleepHours] = useState('')
    const [location, setLocation] = useState(null)
    const [region, setRegion] = useState({
        latitude: 55.7,
        longitude: 12.55,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15
    })

    const [position, setPosition] = useState('')
    const [goalsLeft, setGoalsLeft] = useState('')
    const [goalsRight, setGoalsRight] = useState('')
    const [goalsHeader, setGoalsHeader] = useState('')
    const [assists, setAssists] = useState('')
    const [steps, setSteps] = useState('')

    function handleLongPress(event) {
        const { coordinate } = event.nativeEvent
        setLocation(coordinate)
    }

    const beforeSession = async () => {
        try {
            const newSession = await addDoc(collection(database, 'sessions'), {
                status: "started",
                sessionType,
                date: serverTimestamp(),
                playersCount: Number(playersCount),
                weather,
                pitchType,
                sleepHours: Number(sleepHours),
                location: location,
                position,
            })

            setSessionDocId(newSession.id)
            Alert.alert('Saved', 'Session started')
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }

    const afterSession = async () => {
        if (!sessionDocId) {
            Alert.alert('Error', 'No session id')
            return
        }

        try {
            const sessionRef = doc(database, 'sessions', sessionDocId)
            await updateDoc(sessionRef, {
                status: "completed",
                goalsLeft: Number(goalsLeft),
                goalsRight: Number(goalsRight),
                goalsHeader: Number(goalsHeader),
                totalGoals: Number(goalsHeader) + Number(goalsLeft) + Number(goalsRight),
                assists,
                steps,
            })

            Alert.alert('Saved', 'Session stored in Firestore')
            navigation.goBack()
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }

    return (
        <View>
            {!sessionDocId && (
                <>
                    <TextInput value={sessionType} onChangeText={setSessionType} placeholder="training or match" />

                    <MapView
                        style={styles.map}
                        initialRegion={region}
                        onLongPress={handleLongPress}
                    >
                        {location && (
                            <Marker
                                coordinate={location}
                                title="Session location"
                                description="Saved"
                            />
                        )}
                    </MapView>

                    <TextInput value={weather} onChangeText={setWeather} placeholder="weather" />
                    <TextInput value={playersCount} onChangeText={setPlayersCount} placeholder="How many players attending?" />
                    <TextInput value={sleepHours} onChangeText={setSleepHours} placeholder="How many hours of sleep?" />
                    <TextInput value={position} onChangeText={setPosition} placeholder="What position do we play?" />
                    {!sessionDocId && <Button title="Start session" onPress={beforeSession} />}
                </>
            )}

            {sessionDocId && (
                <>
                    <TextInput value={goalsLeft} onChangeText={setGoalsLeft} placeholder="Goals left foot" keyboardType="numeric" />
                    <TextInput value={goalsRight} onChangeText={setGoalsRight} placeholder="Goals right foot" keyboardType="numeric" />
                    <TextInput value={goalsHeader} onChangeText={setGoalsHeader} placeholder="Goals header" keyboardType="numeric" />
                    <TextInput value={assists} onChangeText={setAssists} placeholder="Assists" keyboardType="numeric" />
                    <TextInput value={steps} onChangeText={setSteps} placeholder="Steps" keyboardType="numeric" />
                    <Button title="Complete session" onPress={afterSession} />
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 250,
        marginVertical: 12,
    },

})