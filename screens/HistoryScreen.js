import { View, ScrollView, Text, Pressable } from 'react-native'
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
        <View style={globalStyles.screen}>
            <ScrollView style={globalStyles.card}>
                <Text style={globalStyles.title}>Past activity</Text>

                {sessions.map((session) => (
                    <Pressable
                        key={session.id}
                        style={globalStyles.group}
                        onPress={() => navigation.navigate('SessionDetail', { session })}
                    >
                        <Text style={globalStyles.label}>{formatDate(session.date)}</Text>
                        <Text style={globalStyles.label}>{session.sessionType}</Text>
                        <Text style={globalStyles.label}>{session.score}</Text>
                        <Text style={globalStyles.label}>{session.playersCount}</Text>
                        <Text style={globalStyles.label}>{session.position}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}