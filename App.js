import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppLoading } from 'expo';

const cacheImages = (images) => {
  images.map( image => {
    if(typeof image === "string"){
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync();

    }
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = async () => {
    const images = cacheImages
  }
  const onFinish = () => {
    setIsReady(true)
  }
  return !isReady ? <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={(e)=>console.error(e)}/> : (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!??d</Text>

      <StatusBar style="auto" />
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
});
