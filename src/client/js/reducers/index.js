import { combineReducers } from 'redux';
import about from './about';
import history from './history';
import organizations from './organizations';

const app = combineReducers({
  about,
  history,
  organizations,
});

export default app;
