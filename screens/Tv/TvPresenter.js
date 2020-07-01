import React from 'react';
import { Text } from 'react-native';
import ScrollContainer from '../../components/ScrollContainer';
import styled from 'styled-components/native';
import Title from '../../components/Movies/Title';
import List from '../../components/List';
import Vertical from '../../components/Movies/Vertical';
import Horizontal from '../../components/Movies/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';

const Container = styled.View``;

export default ({loading, today, topRated, popular, thisWeek}) => (
  <ScrollContainer loading={loading}>
    <Container>
    <Title title={'Today'}></Title>
      <HorizontalSlider>
        {today.map(tv =>
          <Vertical
            key={tv.id}
            id={tv.id}
            poster={tv.poster_path}
            title={tv.name}
            votes={tv.vote_average}/>
        )}
      </HorizontalSlider>

      <Title title={'Popular'}></Title>
      <HorizontalSlider>
        {popular.map(tv =>
          <Vertical
            key={tv.id}
            id={tv.id}
            poster={tv.poster_path}
            title={tv.name}
            votes={tv.vote_average}/>
        )}
      </HorizontalSlider>

      <List title={'Top Rated'}>
        {topRated.map(tv => (
          <Horizontal
            key={tv.id}
            id={tv.id}
            title={tv.name}
            releaseDate={tv.release_date}
            poster={tv.poster_path}
            overview={tv.overview} />
        ))}
      </List>
    </Container>
  </ScrollContainer>
)