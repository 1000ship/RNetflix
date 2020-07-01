import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "../Poster";
import Votes from "./Votes";
import { trimText } from "../../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  align-items: center;
  margin-right: 10px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ id, poster, title, votes, isTv }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id, poster, title, votes, isTv
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
