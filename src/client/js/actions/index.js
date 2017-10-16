import {
  ABOUT_FETCHED,
  HISTORY_FETCHED,
  ORGANIZATIONS_FETCHED,
} from './types';

const getAbout = about => ({
  type: ABOUT_FETCHED,
  payload: about,
});

const getHistory = commits => ({
  type: HISTORY_FETCHED,
  payload: commits,
});

const getOrganizations = organizations => ({
  type: ORGANIZATIONS_FETCHED,
  payload: organizations,
});

export {
  getAbout,
  getHistory,
  getOrganizations,
};
