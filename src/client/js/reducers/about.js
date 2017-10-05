import { ABOUT_FETCHED } from '../types';

export default (state = null, action) => {
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
