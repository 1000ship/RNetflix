import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const ScrollContainer = ({loading, children}) => (
  <ScrollView
    style={{backgroundColor: 'black'}}
    contentContainerStyle={{
    flex: loading ? 1 : 0, // scroll not working
    justifyContent: loading ? 'center' : 'flex-start'}}>
    {loading ? <ActivityIndicator color="white" size="small"/> : children}
  </ScrollView>
)

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node
}

export default ScrollContainer;