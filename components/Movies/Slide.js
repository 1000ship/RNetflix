import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types'
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { apiImage } from '../../api';
import Poster from '../Poster';
import Votes from './Votes';
import { trimText } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
  margin-left: 30px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

const VotesContainer = styled.View`
  margin-bottom: 3px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.7;
  font-size: 13px;
  font-weight: 500;
`;

const Button = styled.View`
  background-color: #e74c3c;
  padding: 5px 10px;
  margin-top: 5px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({id, title, backgroundImage, votes, overview, poster, isTv}) => {
  const navigation = useNavigation()
  const goToDetail = () => {
    navigation.navigate('Detail', {
      id, title, backgroundImage, votes, overview, poster, isTv
    })
  }
  return (
  <Container>
    <BG resizeMode='cover' source={{uri: apiImage(backgroundImage)}}/>
    <Content>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 40)}</Title>
        <VotesContainer>
          <Votes votes={votes}/>
        </VotesContainer>
        <Overview>{trimText(overview, 80)}</Overview>
        <TouchableOpacity onPress={goToDetail}>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
)}

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
}

export default Slide;