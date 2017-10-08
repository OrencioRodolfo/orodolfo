/* global fetch */
export const fetchHistory = () => fetch(`${API_URL}/commit`)
.then(response => response.json());
