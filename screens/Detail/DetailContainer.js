import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default ({
  navigation,
  route: {
    params: {
      id,
      title,
      backgroundImage,
      poster,
      votes,
      releaseDate,
      overview,
      isTv,
    },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({
    id,
    title,
    backgroundImage,
    poster,
    votes,
    releaseDate,
    overview,
    isTv,
    error: null
  });
  
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const getData = async () => {
    let promises;
    if (isTv) promises = tvApi.show(id);
    else promises = movieApi.movieDetail(id);
    let [getContent, getContentError] = await promises;
    if( getContentError )
      setMovies({
        error: getContentError
      })
    else
      setMovie({
        ...getContent, error: null,
        title: title || getContent?.original_title,
        backgroundImage: backgroundImage || getContent?.backdrop_path,
        poster: poster || getContent?.poster_path,
        votes: votes || getContent?.vote_average,
        overview: overview || getContent?.overview,
        releaseDate: releaseDate || getContent?.release_date
      });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return <DetailPresenter {...movie} loading={loading} />;
};
