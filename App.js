import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from "@react-navigation/native";
import Stack from './navigation/Stack';
import { Asset } from 'expo-asset';

const cacheImages = (images) =>
  images.map( image => {
    if(typeof image === "string"){
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  });

const cacheFonts = (fonts) =>
  fonts.map( font => [Font.loadAsync(font), Font.loadAsync(font)] );

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1593291683687-5389cd94b450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3100&q=80",
      require("./assets/splash.png")
    ])
    const fonts = cacheFonts([
      Ionicons.font
    ])
    return Promise.all([...images, ...fonts])
  }
  const onFinish = () => {
    setIsReady(true)
  }
  return !isReady ? <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={(e)=>console.error(e)}/> : (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
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
