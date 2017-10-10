/* global fetch */
export const fetchHistory = () => fetch('/commit')
.then(response => response.json());
