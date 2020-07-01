import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

const HorizontalSilder = ({children}) => (
  <ScrollView
    contentContainerStyle={{paddingLeft: 10}}
    horizontal
    showsHorizontalScrollIndicator={false}>
    {children}
  </ScrollView>
)

HorizontalSilder.propTypes = {
  children: PropTypes.node
}

export default HorizontalSilder;