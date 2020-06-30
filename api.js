import axios from "axios";

const TMDB_KEY = "bcfdb11506e553fcd87c0367d1690665"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
      api_key: TMDB_KEY,
      language: "ko-KR",
  },
});

const makeRequest = async(path, params = {}) =>
  axios.get(`https://api.themoviedb.org/3/${path}`, {
      params:{
          ...params,
          api_key: TMDB_KEY,
      }
  });

const getAnything = async(path, params = {}) => {
    try {
        const {
            data: {results},
            data
        } = await makeRequest(path, params);
        return [results || ㅇㅁㅅㅁ, null]
    } catch(e) {
        return [null, e]
    }
}

export const movieApi = {
  nowPlaying: () => getAnything("movie/now_playing"),
  upcoming: () => getAnything("movie/upcoming"),
  popular: () => getAnything("movie/popular"),
  movieDetail: (id) => getAnything(`movie/${id}`, {
    append_to_response: "videos",
  }),
  search: (term) => getAnything("search/movie", {
    query: encodeURIComponent(term),
  }),
  discover: () => getAnything("discover/movie"),
};

export const tvApi = {
  thisWeek: () => getAnything("tv/on_the_air"),
  topRated: () => getAnything("tv/top_rated"),
  popular: () => getAnything("tv/popular"),
  today: () => getAnything("tv/airing_today"),
  show: (id) => getAnything(`tv/${id}`, {
    append_to_response: "videos",
  }),
  search: (term) => getAnything("search/tv", {
    query: encodeURIComponent(term),
  })
};