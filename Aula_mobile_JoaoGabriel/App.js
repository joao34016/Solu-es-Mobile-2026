import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile, { Joao } from './components/Profile';
import { Person } from './components/Profile';
export default function App() {
  return (
    <View style={styles.container}>
      <Joao/>
      <Person/>
      <Text>Open up App.js to start working on your app!</Text>
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
