export default (state = null, action) => {
  switch (action.type) {
    case 'ABOUT_FETCHED':
      return action.payload;

    default:
      return state;
  }
};
