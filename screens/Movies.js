import React, { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { movieApi } from '../api';

export default () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null
  })
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      nowPlaying, nowPlayingError, popular, popularError, upcoming, upcomingError
    })
  }
  useEffect(()=> {
    getData()
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "black"}}>
      <Text style={{color:"white"}}>
        {movies.nowPlaying?.length}
      </Text>
    </View>
  )
}