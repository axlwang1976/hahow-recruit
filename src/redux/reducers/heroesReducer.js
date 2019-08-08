import heroesActionTypes from '../actionTypes/heroesActionTypes';

const INIT_STATE = { heroes: [], errorMsg: '' };

const heroesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case heroesActionTypes.FETCH_HEROES_START:
      return { ...state };
    case heroesActionTypes.FETCH_HEROES_SUCCESS:
      return { ...state, heroes: action.payload };
    case heroesActionTypes.FETCH_HEROES_FAIL:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default heroesReducer;
