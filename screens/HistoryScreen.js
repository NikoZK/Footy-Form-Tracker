import { View, Text, Pressable, ImageBackground, FlatList } from "react-native"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { database } from "../firebase.js"
import { globalStyles } from "../GlobalStyles.js"

export default function HistoryScreen({ navigation }) {
  const [sessions, setSessions] = useState([])

  const [filter, setFilter] = useState("Training")
  const visible = sessions.filter((session) => session.sessionType === filter)

  const loadSessions = async () => {
    try {
      const snapshot = await getDocs(collection(database, "sessions"))
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      items.sort((a, b) => b.date - a.date)
      setSessions(items)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    loadSessions()
  }, [])

  function getResult(score) {
    const [home, away] = score.split("-").map(Number)
    if (home > away) return "W"
    if (home < away) return "L"
    return "D"
  }
  
  function getColor(result) {
  if (result === "W") return "green"
  if (result === "L") return "red"
  return "orange" 
  }

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <FlatList
        data={visible}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={globalStyles.group}
            onPress={() =>
              navigation.navigate("HistoryDetail", { session: item })
            }
          >
            <View style={globalStyles.buttonRow}>
            <Text style={globalStyles.title}>{item.score}</Text>
            <Text style={[globalStyles.title, { color: getColor(getResult(item.score)) } ]}>{getResult(item.score)}</Text>
            </View>

            <View style={globalStyles.buttonRow}>
              <View style={globalStyles.optionButton}>
                <Text style={globalStyles.optionText}>
                  G/A: {Number(item.totalGoals) + Number(item.assists)}
                </Text>
              </View>
              <View style={globalStyles.optionButton}>
                <Text style={globalStyles.optionText}>
                  {item.date.toDate().toLocaleDateString()}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
      <View style={globalStyles.filterButtons}>
        <Pressable
          style={globalStyles.optionButton}
          onPress={() => setFilter("Training")}
        >
          <Text style={globalStyles.optionText}>Training</Text>
        </Pressable>
        <Pressable
          style={globalStyles.optionButton}
          onPress={() => setFilter("Match")}
        >
          <Text style={globalStyles.optionText}>Match</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}
