import axios from 'axios';

const BASE_URL_TRANDING = 'https://api.themoviedb.org/3/trending/movie/week';
const BASE_URL_SEARCH_QUERY = 'https://api.themoviedb.org/3/search/movie';
const BASE_URL_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/';

const KEY = 'c5d50af4186bf21fa991895725448c9f';

export async function getTrandingMovies() {
  const axiosOptions = {
    params: {
      api_key: KEY,
    },
  };

  try {
    const {
      data: { results },
    } = await axios.get(BASE_URL_TRANDING, axiosOptions);

    return results;
  } catch (err) {
    throw new Error(`Sorry, please try again.`);
  }
}

export async function getFilmsByQuery(searchQuery, page) {
  const axiosOptions = {
    params: {
      api_key: KEY,
      language: 'en-US',
      query: searchQuery,
      page: page,
      include_adult: false,
    },
  };

  try {
    const {
      data: { results, total_results },
    } = await axios.get(BASE_URL_SEARCH_QUERY, axiosOptions);

    if (total_results === 0) {
      throw new Error(
        `Sorry, there are no pictures for the "${searchQuery}". Please try again.`
      );
    }

    return results;
  } catch (err) {}
}

export async function getMovieDetails(movieId) {
  const axiosOptions = {
    params: {
      api_key: KEY,
    },
  };

  try {
    const { data } = await axios.get(
      `${BASE_URL_MOVIE_DETAILS}${movieId}`,
      axiosOptions
    );

    return data;
  } catch (err) {
    throw new Error(`Sorry, there is no movie details available`);
  }
}

export async function getMovieCredits(movieId) {
  const axiosOptions = {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  };

  try {
    const { data } = await axios.get(
      `${BASE_URL_MOVIE_DETAILS}${movieId}/credits`,
      axiosOptions
    );

    return data;
  } catch (err) {
    throw new Error(`Sorry, there is no movie casts available`);
  }
}

export async function getMovieReviews(movieId) {
  const axiosOptions = {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  };

  try {
    const { data } = await axios.get(
      `${BASE_URL_MOVIE_DETAILS}${movieId}/reviews`,
      axiosOptions
    );

    return data.results;
  } catch (err) {
    throw new Error(`Sorry, there is no movie reviews available`);
  }
}
export const API = {
  getTrandingMovies,
  getFilmsByQuery,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
