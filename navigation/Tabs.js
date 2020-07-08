import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search/SearchContainer';
import Favs from '../screens/Favs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const getHeaderName = (route) => route?.state?.routeNames[route?.state?.index] || "Movies"

export default ( {navigation, route} ) => {
  useLayoutEffect( ()=>{
    const name = getHeaderName(route)
    navigation?.setOptions( {
       title: name
    } )
  }, [ route ] );
  return (
    <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if(route.name === "Movies"){
            iconName += "film"
          } else if(route.name === "TV"){
            iconName += "tv"
          } else if(route.name === "Search"){
            iconName += "search"
          } else if(route.name === "Favs"){
            iconName += "heart"
          }
          return <Ionicons name={iconName} color={focused ? "white" : "grey"} size={26}/>
        }
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        }
      }}>
      <Tab.Screen name="Favs" component={Favs} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  )
};