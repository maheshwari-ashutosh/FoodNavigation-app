import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import FoodNavigator from './navigation/FoodNavigator';
import Colors from './Constants/Colors';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  // return new Promise<void>((resolve, reject)=> {
  //   setTimeout(() => resolve(), 3000);
  // })
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={() => console.log('Fonts not loaded')}
      />
    );
  }

  return (
    <>
      <FoodNavigator />
      <StatusBar style='inverted' backgroundColor={Colors.primaryColorDark}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'open-sans-bold',
  },
});
