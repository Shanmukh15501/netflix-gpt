export const REACT_APP_NETFLIX_LOGO_URL = process.env.REACT_APP_NETFLIX_LOGO_URL;

export const PHOTO_URL = process.env.REACT_APP_PROFILE_PHOTO_URL;

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
  }
};

export const TMDB_PHOTO_URL = process.env.REACT_APP_TMDB_PHOTO_URL;