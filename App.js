import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import imageBack from './images/background.jpeg';
import RegistrationScreen from './screens/RegistrationScreen';
import * as Font from 'expo-font'

const image = imageBack;

const loadApplication = () => {
  
}

export default function App() {
  return (
    <View style={styles.container}>
    
        <ImageBackground source={image} style={styles.image}>

            <View>
              <RegistrationScreen />
            </View>

        </ImageBackground>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: "Roboto"
  },
  text: {
    color: 'red'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    // position: "relative"
  }
});
