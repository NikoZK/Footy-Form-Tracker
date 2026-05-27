import { View, ScrollView, Text, Pressable, ImageBackground } from 'react-native'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebase.js'
import { globalStyles } from '../GlobalStyles.js'

export default function HistoryScreen({ navigation }) {
    const [sessions, setSessions] = useState([])

    const loadSessions = async () => {
        try {
            const snapshot = await getDocs(collection(database, 'sessions'))
            const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setSessions(items)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        loadSessions()
    }, [])

    const formatDate = (value) => {
        return value.toDate().toLocaleDateString()
    }

    return (
        <ImageBackground
        source={require('../assets/background.jpg')}
        style={{ flex: 1 }}
        resizeMode="cover">
            <ScrollView >
                {sessions.map((session) => (
                    <Pressable
                    key={session.id}
                    style={globalStyles.group}
                    onPress={() => navigation.navigate('HistoryDetail', { session })}
                    >
                        <Text style={globalStyles.title}>{session.score}</Text>
                        <Text style={globalStyles.label}>
                            G/A: {Number(session.totalGoals) + Number(session.assists)} | {session.sessionType} | {session.date.toDate().toLocaleDateString()}
                            </Text>
                    </Pressable>
                ))}
            </ScrollView>
</ImageBackground>
    )
}