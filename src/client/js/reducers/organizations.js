import { ORGANIZATIONS_FETCHED } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORGANIZATIONS_FETCHED:
      return [
        ...state,
        ...action.payload,
      ];

    default:
      return state;
  }
};
