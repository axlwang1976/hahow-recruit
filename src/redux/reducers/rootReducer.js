import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  profile: profileReducer,
});

export default rootReducer;
