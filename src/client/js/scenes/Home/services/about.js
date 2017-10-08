/* global fetch */
export const fetchAbout = () => fetch(`${API_URL}/about`)
  .then(response => response.json());
