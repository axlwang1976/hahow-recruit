import axios from 'axios';
import heroesActionTypes from '../actionTypes/heroesActionTypes';

const fetchHeroesStart = () => ({
  type: heroesActionTypes.FETCH_HEROES_START,
});

const fetchHeroesSuccess = heroes => ({
  type: heroesActionTypes.FETCH_HEROES_SUCCESS,
  payload: heroes,
});

const fetchHeroesFail = errorMsg => ({
  type: heroesActionTypes.FETCH_HEROES_FAIL,
  payload: errorMsg,
});

export const fetchHeroesAsync = () => async dispatch => {
  try {
    dispatch(fetchHeroesStart());
    const response = await axios.get(
      'http://hahow-recruit.herokuapp.com/heroes'
    );
    const data = await response.data;
    dispatch(fetchHeroesSuccess(data));
  } catch (error) {
    dispatch(fetchHeroesFail(error));
  }
};
