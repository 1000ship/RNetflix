import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions } from 'react-native';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Movies/Title';
import Vertical from '../../components/Movies/Vertical';
import Horizontal from '../../components/Movies/Horizontal';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';

const {height: HEIGHT} = Dimensions.get('window');

const Container = styled.View``;

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
`;

const UpcomingContainer = styled.View`
  margin-top: 40px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <SlideContainer>
      <Swiper controlsEnabled={false} loop timeout={3}>
      {nowPlaying.map(movie =>
        <Slide
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          overview={movie.overview}
          votes={movie.vote_average}
          backgroundImage={movie.backdrop_path}
          poster={movie.poster_path}
        />)}
      </Swiper>
    </SlideContainer>
    <Container>
      <Title title={'Popular Movies'}></Title>
      <HorizontalSlider>
        {popular.map(movie =>
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            votes={movie.vote_average}/>
        )}
      </HorizontalSlider>

      <List title={'Coming Soon'}>
        {upcoming.map(movie => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            poster={movie.poster_path}
            overview={movie.overview} />
        ))}
      </List>
    </Container>
  </ScrollContainer>
)