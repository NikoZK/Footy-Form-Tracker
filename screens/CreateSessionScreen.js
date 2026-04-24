import { View, Text, Button, StyleSheet } from 'react-native'

export default function CreateSessionScreen({ navigation }) {
    return (
        <View>
            <Button title="Back" onPress={() => navigation.goBack()}></Button>
            <Text> Tap here to start new session </Text>


        </View>
    )
}