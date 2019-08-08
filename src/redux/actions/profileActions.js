import axios from 'axios';
import profileActionTypes from '../actionTypes/profileActionTypes';

const fetchStart = () => ({
  type: profileActionTypes.FETCH_START,
});

const fetchProfileSuccess = profile => ({
  type: profileActionTypes.FETCH_PROFILE_SUCCESS,
  payload: profile,
});

const fetchFail = errorMsg => ({
  type: profileActionTypes.FETCH_FAIL,
  payload: errorMsg,
});

export const fetchProfileAsync = id => async dispatch => {
  try {
    dispatch(fetchStart());
    const response = await axios.get(
      `http://hahow-recruit.herokuapp.com/heroes/${id}/profile`
    );
    const data = await response.data;
    dispatch(fetchProfileSuccess(data));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};

export const incStr = str => ({
  type: profileActionTypes.INC_STR,
  payload: str + 1,
});

export const decStr = str => ({
  type: profileActionTypes.DEC_STR,
  payload: str - 1,
});

export const incInt = int => ({
  type: profileActionTypes.INC_INT,
  payload: int + 1,
});

export const decInt = int => ({
  type: profileActionTypes.DEC_INT,
  payload: int - 1,
});

export const incAgi = agi => ({
  type: profileActionTypes.INC_AGI,
  payload: agi + 1,
});

export const decAgi = agi => ({
  type: profileActionTypes.DEC_AGI,
  payload: agi - 1,
});

export const incLuk = luk => ({
  type: profileActionTypes.INC_LUK,
  payload: luk + 1,
});

export const decLuk = luk => ({
  type: profileActionTypes.DEC_LUK,
  payload: luk - 1,
});

export const sendProfileAsync = (heroId, profile) => async dispatch => {
  try {
    await axios.patch(
      `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
      profile
    );
  } catch (error) {
    dispatch(fetchFail(error));
  }
};
