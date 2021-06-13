import snacksReducer from './snacks';
import drinksReducer from './drinks';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  snacks: snacksReducer,
  drinks: drinksReducer,
});

export default rootReducer;