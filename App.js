import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.background}>
      <LinearGradient
        style={styles.frame}
        colors={['#FF00FF', '#FCEE21']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Hola Coder!</Text>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 280,
    height: 180,
    borderRadius: 2,
  },
  text: {
    color: '#fbfbfb',
    fontSize: 20,
  }
});
