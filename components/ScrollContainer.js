import React, { useState } from 'react';
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

const ScrollContainer = ({loading, children, refreshFunc}) => {
  if( !loading ) loading = false;
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true)
    if(refreshFunc) await refreshFunc()
    setRefreshing(false)
  }
  return (
  <ScrollView
    refreshControl={
      <RefreshControl tintColor={'white'} refreshing={refreshing} onRefresh={onRefresh}/>
    }
    style={{backgroundColor: 'black'}}
    contentContainerStyle={{
    flex: loading ? 1 : 0, // scroll not working
    justifyContent: loading ? 'center' : 'flex-start'}}>
    {loading ? <ActivityIndicator color="white" size="small"/> : children}
  </ScrollView>
)}

ScrollContainer.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  refreshFunc: PropTypes.func,
}

export default ScrollContainer;