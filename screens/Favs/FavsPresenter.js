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
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY();
  const panResponse = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 150) {
        Animated.spring(position, {
          toValue: { x: WIDTH + 100, y: dy },
          useNativeDriver: true,
        }).start(nextCard);
      } else if (dx <= -150) {
        Animated.spring(position, {
          toValue: { x: -WIDTH - 100, y: dy },
          useNativeDriver: true,
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          bounciness: 10,
        }).start();
      }
    },
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-8deg", "0deg", "8deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {results.map((result, index) => {
        return index < topIndex ? null : (
          <Card
            style={
              index === topIndex
                ? {
                    zIndex: 1,
                    transform: [
                      { rotate: rotationValues },
                      ...position.getTranslateTransform(),
                    ],
                  }
                : index === topIndex + 1
                ? {
                    opacity: secondCardOpacity,
                    transform: [{ scale: secondCardScale }],
                    zIndex: -index,
                  }
                : {
                    opacity: 0,
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
