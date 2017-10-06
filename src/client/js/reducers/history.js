import { HISTORY_FETCHED } from '../actions/types';

const INITIAL_STATE = { commits: {} };

export default (state = INITIAL_STATE, action) => {
  let history;
  switch (action.type) {
    case HISTORY_FETCHED:
      history = action.payload.reverse().reduce((acc, item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const obj = { ...item, date };

        if (acc[year]) {
          acc[year].push(obj);
        } else {
          acc[year] = [obj];
        }

        return acc;
      }, {});

      return {
        ...state,
        commits: history,
      };

    default:
      return state;
  }
};
