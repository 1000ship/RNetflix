import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, PanResponder, Animated } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled(Animated.View)`
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
  top: 80px;
`;

const Poster = styled.Image`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const FavsPresenter = ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const position = new Animated.ValueXY();
  const panResponse = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
        bounciness: 10,
      }).start();
    },
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-5deg', '0deg', '5deg'],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {results.reverse().map((result, index) => {
        return (
          <Card
            style={
              index === topIndex
                ? {
                    zIndex: 1,
                    transform: [{rotate: rotationValues}, ...position.getTranslateTransform()],
                  }
                : {
                    zIndex: -index,
                  }
            }
            key={result.id}
            {...panResponse.panHandlers}
          >
            <Poster source={{ uri: apiImage(result.poster_path) }} />
          </Card>
        );
      })}
    </Container>
  );
};

export default FavsPresenter;
