import { combineReducers } from 'redux';
import about from './about';
import history from './history';

const app = combineReducers({
  about,
  history,
});

export default app;
