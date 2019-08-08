import profileActionTypes from '../actionTypes/profileActionTypes';

const INIT_STATE = { profile: null, ap: 0, errorMsg: '' };

const profileReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case profileActionTypes.FETCH_START:
      return { ...state };
    case profileActionTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, profile: action.payload };
    case profileActionTypes.FETCH_FAIL:
      return { ...state, errorMsg: action.payload };
    case profileActionTypes.INC_STR:
      return {
        ...state,
        profile: { ...state.profile, str: action.payload },
        ap: state.ap - 1,
      };
    case profileActionTypes.DEC_STR:
      return {
        ...state,
        profile: { ...state.profile, str: action.payload },
        ap: state.ap + 1,
      };
    case profileActionTypes.INC_INT:
      return {
        ...state,
        profile: { ...state.profile, int: action.payload },
        ap: state.ap - 1,
      };
    case profileActionTypes.DEC_INT:
      return {
        ...state,
        profile: { ...state.profile, int: action.payload },
        ap: state.ap + 1,
      };
    case profileActionTypes.INC_AGI:
      return {
        ...state,
        profile: { ...state.profile, agi: action.payload },
        ap: state.ap - 1,
      };
    case profileActionTypes.DEC_AGI:
      return {
        ...state,
        profile: { ...state.profile, agi: action.payload },
        ap: state.ap + 1,
      };
    case profileActionTypes.INC_LUK:
      return {
        ...state,
        profile: { ...state.profile, luk: action.payload },
        ap: state.ap - 1,
      };
    case profileActionTypes.DEC_LUK:
      return {
        ...state,
        profile: { ...state.profile, luk: action.payload },
        ap: state.ap + 1,
      };
    default:
      return state;
  }
};

export default profileReducer;
