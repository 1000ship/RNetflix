import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Title from './Movies/Title';

const HorizontalSilder = ({title, children}) => (
  <>
    <Title title={title}/>
    <ScrollView
      contentContainerStyle={{paddingLeft: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  </>
)

HorizontalSilder.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default HorizontalSilder;