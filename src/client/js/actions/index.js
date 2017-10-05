import {
  ABOUT_FETCHED,
  HISTORY_FETCHED,
} from '../types';

const getAbout = about => ({
  type: ABOUT_FETCHED,
  payload: about,
});

const getHistory = commits => ({
  type: HISTORY_FETCHED,
  payload: commits,
});

export {
  getAbout,
  getHistory,
};
