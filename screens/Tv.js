import React, { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { tvApi } from '../api';

export default () => {
  const [shows, setShows] = useState({
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
    today: [],
    todayError: null,
  })
  const getData = async () => {
    const [thisWeek, thisWeekError] = await tvApi.thisWeek()
    const [topRated, topRatedError] = await tvApi.topRated()
    const [popular, popularError] = await tvApi.popular()
    const [today, todayError] = await tvApi.today()
    setShows({
      thisWeek, thisWeekError, topRated, topRatedError, popular, popularError, today, todayError
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <View>
      <Text>Tv</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="Go to Detail"></Button>
    </View>
  )
}