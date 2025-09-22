import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import iconImage from "./assets/MF.png"

export default function App() {
  return (
    <View  style={styles.container}>
      <ImageBackground
       source={iconImage}
       resizeMode="cover"
       style={styles.image}
      >
      <Text style={styles.text}>Hello MH people</Text>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:'100%',
    height: '100%',
    resizeMode:'cover',
    justifyContent:'center',
  },
  text:{
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'red',

  },
});
