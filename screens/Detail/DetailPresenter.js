import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import Poster from "../../components/Poster";
import Votes from "../../components/Movies/Votes";
import { apiImage, emptyImage } from "../../api";
import { Dimensions, ActivityIndicator } from "react-native";

const { height: HEIGHT } = Dimensions.get("window");

const BG = styled.Image`
  width: 100%;
  height: ${HEIGHT / 3}px;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  justify-content: flex-end;
  align-items: center;
`;
const Container = styled.View`
  width: 85%;
  flex-direction: row;
  align-items: center;
  top: 30px;
`;
const Info = styled.View`
  padding-left: 20px;
  flex: 1;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 80px;
  padding: 0px 30px;
`;
const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 5px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ id, title, backgroundImage, poster, votes, releaseDate, overview, loading, isTv }) => (
  <ScrollContainer
    loading={false}>
    <Header>
      <BG resizeMode="cover" source={backgroundImage ? { uri: apiImage(backgroundImage) } : emptyImage} />
      <Container>
        <Poster url={poster} />
        <Info>
          <Title>{title}</Title>
          {votes > 0 && <Votes votes={votes} />}
        </Info>
      </Container>
    </Header>
    <Data>
      {overview && (
        <>
          <DataName>Overview</DataName>
          <DataValue>{overview}</DataValue>
        </>
      )}
      {!overview && loading ? <ActivityIndicator style={{marginTop: 30}} color={'white'}/> : null}
    </Data>
  </ScrollContainer>
);
