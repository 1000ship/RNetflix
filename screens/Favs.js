import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';
import { movieApi } from '../api';

export default ({ navigation }) => {
  const [movies, setMovies] = useState({
    results: [],
    error: null
  })
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results, error
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <View>
      <Text>{movies.results?.length}</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="Go to Detail"></Button>
    </View>
  )
}