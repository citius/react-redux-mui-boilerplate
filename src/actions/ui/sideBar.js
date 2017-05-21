import {APP_BAR_TOGGLE} from 'common/constants';

export function toggle(open) {
  return (dispatch, getState) => {
    dispatch({
      type: APP_BAR_TOGGLE,
      open: typeof open == 'undefined' 
        ? !getState().ui.sideBar.open
        : !open
    });
  }
}
