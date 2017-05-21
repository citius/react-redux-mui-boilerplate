import {combineReducers} from 'redux';
import {APP_BAR_TOGGLE} from 'common/constants';

function sideBar(state = {open:false}, action) {
  switch (action.type) {
    case APP_BAR_TOGGLE: return {
      ...state,
      open: action.open
    };
    default: return state;
  }
}

export default combineReducers({
  sideBar
})
