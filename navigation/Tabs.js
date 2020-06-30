import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

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
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>
  )
};