import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { apiImage } from '../api';

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({url}) => url ? (
  <Image source={{uri: apiImage(url)}}/>
) : (
  <Image/>
);

Poster.propTypes = {
  url: PropTypes.string
}

export default Poster;