import { ABOUT_FETCHED } from '../actions/types';

const INITIAL_STATE = { social: [], description: '', repository: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ABOUT_FETCHED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
