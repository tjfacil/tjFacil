export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-tribunais.herokuapp.com/'
    : 'http://localhost:3001/';
