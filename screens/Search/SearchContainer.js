import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      moviesError,
      showsError,
    });
  };
  return (
    <SearchPresenter
      keyword={keyword}
      onChange={onChange}
      onSubmit={search}
      refreshFunc={(keyword) => search(keyword)}
      {...results}
    />
  );
};
