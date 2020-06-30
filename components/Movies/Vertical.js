import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from '../Poster';
import Votes from './Votes';
import { apiImage } from '../../api';

const Container = styled.View`
  align-items: center;
  margin-right: 10px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({poster, title, votes}) => (
  <Container>
    <Poster url={apiImage(poster)} />
    <Title>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</Title>
    <Votes votes={votes}/>
  </Container>
)

Vertical.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}

export default Vertical;