/* global fetch */
export const fetchOrganizations = () => fetch('/organizations')
.then(response => response.json());

