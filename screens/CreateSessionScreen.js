import { View, ScrollView, Text, Button, TextInput, Alert, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app, database } from '../firebase.js'
import MapView, { Marker } from 'react-native-maps'
import { globalStyles } from '../GlobalStyles.js';

export default function CreateSessionScreen({ navigation }) {
    const [sessionDocId, setSessionDocId] = useState(null)
    const [sessionType, setSessionType] = useState('')
    const [playersCount, setPlayersCount] = useState('')
    const [weatherDegrees, setweatherDegrees] = useState('')
    const [pitchType, setPitchType] = useState('')
    const [sleepHours, setSleepHours] = useState('')
    const [location, setLocation] = useState(null)
    const [position, setPosition] = useState('')
    const [score, setScore] = useState('')
    const [goalsLeft, setGoalsLeft] = useState('')
    const [goalsRight, setGoalsRight] = useState('')
    const [goalsHeader, setGoalsHeader] = useState('')
    const [assists, setAssists] = useState('')
    const [steps, setSteps] = useState('')


    const [region, setRegion] = useState({
        latitude: 55.7,
        longitude: 12.55,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15
    })

    const [showMap, setShowMap] = useState(false)

    function handleLongPress(event) {
        const { coordinate } = event.nativeEvent
        setLocation(coordinate)
    }

    const sessionData = {
        sessionType,
        playersCount: Number(playersCount),
        weatherDegrees,
        pitchType,
        sleepHours: Number(sleepHours),
        location,
        position,
        score,
        goalsLeft: Number(goalsLeft),
        goalsRight: Number(goalsRight),
        goalsHeader: Number(goalsHeader),
        totalGoals: Number(goalsHeader) + Number(goalsLeft) + Number(goalsRight),
        assists,
        steps,
    }


    const beforeSession = async () => {
        setSessionDocId('started')
    }

    const afterSession = async () => {
        if (!sessionDocId) {
            Alert.alert('Error', 'No session id')
            return
        }

        try {
            await addDoc(collection(database, 'sessions'), {
                date: serverTimestamp(),
                ...sessionData,
            })

            Alert.alert('Saved', 'Session stored in Firestore')
            navigation.goBack()
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView>
                {!sessionDocId && (
                    <>
                        {!sessionType ? (
                            <View style={globalStyles.group}>
                                <Text style={globalStyles.groupLabel}>Session Type</Text>
                                <View style={globalStyles.buttonRow}>
                                    <Pressable
                                        style={globalStyles.optionButton}
                                        onPress={() => setSessionType('training')}
                                    >
                                        <Text style={globalStyles.optionText}>Training</Text>
                                    </Pressable>
                                    <Pressable
                                        style={globalStyles.optionButton}
                                        onPress={() => setSessionType('match')}
                                    >
                                        <Text style={globalStyles.optionText}>Match</Text>
                                    </Pressable>
                                </View>
                            </View>
                        ) : (
                            <Text style={globalStyles.label}>Session type: {sessionType}</Text>
                        )}

                        <Pressable style={globalStyles.button}
                            onPress={() => setShowMap(prev => !prev)}
                        >
                            <Text>Mark location on map</Text>
                        </Pressable>

                        {showMap && (
                            <MapView
                                style={styles.map}
                                initialRegion={region}
                                onLongPress={handleLongPress}
                            >
                                {location && (
                                    <Marker
                                        coordinate={location}
                                        title="Saved!"
                                        description="Your location"
                                    />
                                )}
                            </MapView>
                        )}

                            {!pitchType ? (
                            <View style={globalStyles.group}>
                                <Text style={globalStyles.groupLabel}>Pitch Type</Text>
                                <View style={globalStyles.buttonRow}>
                                    <Pressable
                                        style={globalStyles.optionButton}
                                        onPress={() => setPitchType('Grass')}
                                    >
                                        <Text style={globalStyles.optionText}>Grass</Text>
                                    </Pressable>
                                    <Pressable
                                        style={globalStyles.optionButton}
                                        onPress={() => setPitchType('Artificial')}
                                    >
                                        <Text style={globalStyles.optionText}>Artificial</Text>
                                    </Pressable>
                                </View>
                            </View>
                        ) : (
                            <Text style={globalStyles.label}>Pitch type: {pitchType}</Text>
                        )}

                        <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={weatherDegrees} onChangeText={setweatherDegrees} placeholder="How many degrees?" />
                        <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={playersCount} onChangeText={setPlayersCount} placeholder="How many players attending?" />
                        <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={sleepHours} onChangeText={setSleepHours} placeholder="How many hours of sleep?" />

                        {!position ? (
                            <View style={globalStyles.group}>
                                <Text style={globalStyles.groupLabel}>Position</Text>
                                <View style={globalStyles.buttonRow}>
                                    {['Goalkeeper', 'Centerback', 'Fullback', 'Midfield', 'Winger', 'Striker'].map((pos) => (
                                        <Pressable
                                            key={pos}
                                            style={globalStyles.optionButton}
                                            onPress={() => setPosition(pos)}
                                        >
                                            <Text style={globalStyles.optionText}>{pos}</Text>
                                        </Pressable>
                                    ))}
                                </View>
                            </View>
                        ) : (
                            <Text style={globalStyles.label}>Position: {position}</Text>
                        )}

                        {!sessionDocId && <Pressable style={globalStyles.button} onPress={beforeSession}>
                            <Text>Start session</Text>
                        </Pressable>
                        }
                    </>
                )}

                {sessionDocId && (
                    <>
                        <View style={globalStyles.group}>
                            <TextInput style={globalStyles.input} value={score} onChangeText={setScore} placeholder="Final score" />
                            <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={goalsLeft} onChangeText={setGoalsLeft} placeholder="Goals with left foot" />
                            <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={goalsRight} onChangeText={setGoalsRight} placeholder="Goals with right foot" />
                            <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={goalsHeader} onChangeText={setGoalsHeader} placeholder="Header goals" />
                            <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={assists} onChangeText={setAssists} placeholder="Assists" />
                            <TextInput keyboardType="numeric" returnKeyType="done" style={globalStyles.input} value={steps} onChangeText={setSteps} placeholder="Steps" />
                            <Button title="Complete session" onPress={afterSession} />
                        </View>
                    </>
                )}
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 250,
        marginVertical: 12,
    },

})