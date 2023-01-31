import { MOVIE_LIST, SET_ERROR } from '../types';
import { MOVIE_API_URL } from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { result } = movies.data;
    dispatchMethod(MOVIE_LIST, result, dispatch);
  } catch (error) {
    dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
  }
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};
