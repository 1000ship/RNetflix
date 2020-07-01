import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { apiImage } from '../api';
import { Asset } from 'expo-asset';

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({url}) => url ? (
  <Image source={{uri: apiImage(url)}}/>
) : (
  <Image source={require('../assets/empty.png')}/>
);

Poster.propTypes = {
  url: PropTypes.string
}

export default Poster;