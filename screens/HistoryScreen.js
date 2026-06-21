import { View, ScrollView, Text, Pressable, ImageBackground, FlatList, Animated } from "react-native"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { database } from "../firebase.js"
import { globalStyles } from "../GlobalStyles.js"

export default function HistoryScreen({ navigation }) {
  const [sessions, setSessions] = useState([])
  

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

  
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={globalStyles.group}
            onPress={() =>
              navigation.navigate("HistoryDetail", { session: item })
            }
          >
            <Text style={globalStyles.title}>{item.score}</Text>
            <Text style={globalStyles.label}>
              G/A: {Number(item.totalGoals) + Number(item.assists)} ┊
              {item.sessionType} ┊ {item.date.toDate().toLocaleDateString()}
            </Text>
          </Pressable>
        )}
      />
    </ImageBackground>
  )
}
