import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';
import { BlurView } from 'expo-blur';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          // borderBottomColor: "blue",
          // shadowColor: "black"
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
  );
}