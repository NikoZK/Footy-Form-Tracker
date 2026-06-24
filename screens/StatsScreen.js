import { View, Text, ImageBackground, ScrollView, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebase.js'
import { globalStyles } from '../GlobalStyles.js'

export default function StatsScreen() {
    const [sessions, setSessions] = useState([])
    const [filter, setFilter] = useState("Training")
    
    const visible = sessions.filter((session) => session.sessionType === filter)

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

let totalGoals = 0
let totalAssists = 0
let totalLeftGoals = 0
let totalRightGoals = 0
let totalHeadGoals = 0
let totalSteps = 0
let totalSleepHours = 0
let totalWeatherDegrees = 0
let wins = 0, draws = 0, losses = 0

visible.forEach((session) => {
  totalGoals += Number(session.totalGoals)
  totalAssists += Number(session.assists)
  totalLeftGoals += Number(session.goalsLeft)
  totalRightGoals += Number(session.goalsRight)
  totalHeadGoals += Number(session.goalsHeader)
  totalSteps += Number(session.steps)
  totalSleepHours += Number(session.sleepHours)
  totalWeatherDegrees += Number(session.weatherDegrees)
})


  function getResult(score) {
    const [home, away] = score.split("-").map(Number)
    if (home > away) return "W"
    if (home < away) return "L"
    return "D"
  }
  
 
  visible.forEach((session) => {
    const r = getResult(session.score)
    if (r === "W") wins++
    else if (r === "L") losses++
    else draws++
  })

const avgGoals = visible.length ? totalGoals / visible.length : 0
const avgLGoals = visible.length ? totalLeftGoals / visible.length : 0
const avgRGoals = visible.length ? totalRightGoals / visible.length : 0
const avgHGoals = visible.length ? totalHeadGoals / visible.length : 0
const avgAssists = visible.length ? totalAssists / visible.length : 0
const avgSteps = visible.length ? totalSteps / visible.length : 0
const avgSleep = visible.length ? totalSleepHours / visible.length : 0
const avgWeatherDegrees = visible.length ? totalWeatherDegrees / visible.length : 0

const totalSessions = visible.length

    
return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
            <ScrollView>
                <View style={globalStyles.group}> 
                    <Text style={globalStyles.title}>General</Text>
                    <Text style={globalStyles.statText}>Sessions: {totalSessions}</Text>
                    <Text style={globalStyles.statText}>W-{wins} D-{draws} L-{losses}</Text>
                    <Text style={globalStyles.statText}>Goals: {totalGoals}</Text>
                    <Text style={globalStyles.statText}>Assists: {totalAssists}</Text>
                    <Text style={globalStyles.statText}>Left Footed Goals: {totalLeftGoals}</Text>
                    <Text style={globalStyles.statText}>Right Footed Goals: {totalRightGoals}</Text>
                    <Text style={globalStyles.statText}>Header Goals: {totalHeadGoals}</Text>
                    <Text style={globalStyles.statText}>Total Steps: {totalSteps}</Text>
                </View>

                <View style={globalStyles.group}> 
                    <Text style={globalStyles.title}>Averages</Text>
                    <Text style={globalStyles.statText}>Goals: {avgGoals.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Left Footed: {avgLGoals.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Right Footed: {avgRGoals.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Header Goals: {avgHGoals.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Assists: {avgAssists.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Steps: {avgSteps.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Hours Slept: {avgSleep.toFixed(1)}</Text>
                    <Text style={globalStyles.statText}>Weather Degrees: {avgWeatherDegrees.toFixed(1)}</Text>
                </View>

            </ScrollView>
                    <View style={globalStyles.filterButtons}>
                        <Pressable
                        style={globalStyles.optionButton}
                        onPress={() => setFilter("Training")}>
                            <Text style={globalStyles.optionText}>Training</Text>
                        </Pressable>
                        <Pressable
                        style={globalStyles.optionButton}
                        onPress={() => setFilter("Match")}>
                            <Text style={globalStyles.optionText}>Match</Text>
                      </Pressable>
                    </View>
    </ImageBackground>
    )
}