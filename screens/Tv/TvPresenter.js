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

export default ({loading, today, topRated, popular, thisWeek, refreshFunc }) => (
  <ScrollContainer
    loading={loading}
    refreshFunc={refreshFunc}>
    <Container>
      <HorizontalSlider
        title={'Today'}>
        {today.map(show =>
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}/>
        )}
      </HorizontalSlider>

      <HorizontalSlider
        title={'Popular'}>
        {popular.map(show =>
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}/>
        )}
      </HorizontalSlider>

      <List title={'Top Rated'}>
        {topRated.map(show => (
          <Horizontal
            key={show.id}
            id={show.id}
            title={show.name}
            releaseDate={show.release_date}
            poster={show.poster_path}
            overview={show.overview} />
        ))}
      </List>
    </Container>
  </ScrollContainer>
)