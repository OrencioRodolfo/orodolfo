/* global fetch */
export const fetchAbout = () => fetch('/about')
  .then(response => response.json());
