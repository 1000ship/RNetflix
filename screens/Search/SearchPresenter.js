import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import PropTypes from "prop-types";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSilder from "../../components/HorizontalSlider";
import Vertical from "../../components/Movies/Vertical";

const Container = styled.ScrollView``;

const Text = styled.Text``;

const SearchPresenter = ({
  movies,
  shows,
  keyword,
  onChange,
  onSubmit,
  refreshFunc,
}) => (
  <ScrollContainer
    refreshFunc={refreshFunc}
    contentContainerStyle={{
      paddingTop: 10,
    }}
  >
    <Input
      placeholder={"Search here..."}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />

    {movies && movies.length > 0 ? (
      <HorizontalSilder title={"Movie Results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            votes={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </HorizontalSilder>
    ) : null}

    {shows && shows.length > 0 ? (
      <HorizontalSilder title={"TV Results"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
            overview={show.overview}
          />
        ))}
      </HorizontalSilder>
    ) : null}
  </ScrollContainer>
);

SearchPresenter.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
