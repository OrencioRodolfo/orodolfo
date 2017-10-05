import { HISTORY_FETCHED } from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case HISTORY_FETCHED:
      return {
        ...state,
        commits: action.payload,
      };

    default:
      return state;
  }
};
