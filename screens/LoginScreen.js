import { View, Text, TextInput, Pressable, Alert, ImageBackground } from "react-native"
import { useState } from "react"
import { useAuth } from "../context/AuthContext.js"
import { globalStyles } from "../GlobalStyles.js"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, signup } = useAuth()

  const handleLogin = async () => {
    try {
      await login(email, password)
    } catch (error) {
      Alert.alert("Login failed", error.message)
    }
  }

  const handleSignup = async () => {
    try {
      await signup(email, password)
    } catch (error) {
      Alert.alert("Sign up failed", error.message)
    }
  }

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={globalStyles.homeOverlay}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.title}>Footy Form Tracker</Text>
          <Text style={globalStyles.subtitle}>Log in to track your sessions</Text>

          <TextInput
            style={globalStyles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={globalStyles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          <Pressable style={globalStyles.button} onPress={handleLogin}>
            <Text style={globalStyles.buttonText}>Log in</Text>
          </Pressable>
          <Pressable style={globalStyles.button} onPress={handleSignup}>
            <Text style={globalStyles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}
