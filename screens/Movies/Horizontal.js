import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from '../../components/Poster';
import { trimText, formatDate } from '../../utils';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 65%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

const Overview = styled.Text`
  color: white;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
  margin: 10px 0px;
`;

const Horizontal = ({id, title, releaseDate, poster, overview}) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster}/>
      <Data>
        <Title>{trimText(title, 30)}</Title>
        {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
        <Overview>{trimText(overview, 130)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
}

export default Horizontal;