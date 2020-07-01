import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    loading: false,
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const onSubmit = () => search();
  const search = async () => {
    setResults({loading: true})
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      loading: false,
      movies,
      shows,
      moviesError,
      showsError
    })
  };
  return (
    <SearchPresenter
      keyword={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
      refreshFunc={(keyword) => search(keyword)}
      {...results}
    />
  );
};
