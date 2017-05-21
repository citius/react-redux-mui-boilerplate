import {combineReducers} from 'redux';
import ui from 'reducers/ui';

function data(state = {}, action) {
  return state;
}

export default combineReducers({
  ui,
  data
});
