import { View, Text, Button, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text> Home screen with options to create new or view history </Text>
            <Button title="Create New Session" onPress={() => navigation.navigate('CreateSession')}> </Button>
            <Button title="View History" onPress={() => navigation.navigate('History')}> </Button>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})