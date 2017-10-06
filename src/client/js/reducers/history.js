import { HISTORY_FETCHED } from '../actions/types';

const INITIAL_STATE = { commits: [] };

export default (state = INITIAL_STATE, action) => {
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
