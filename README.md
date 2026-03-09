# Netflix GPT

Netflix GPT is a React app with Firebase authentication, Redux state management, Tailwind styling, and TMDB-powered movie browsing.

## Features

- Sign in and sign up with Firebase Authentication
- Update the user profile with a default avatar after sign up
- Persist authenticated user state in Redux
- Redirect users based on auth state changes
- Fetch now-playing movies from TMDB
- Show a hero section with movie title, overview, and trailer background
- Render movie rows for browsing content

## Tech Stack

- React
- React Router
- Redux Toolkit and React Redux
- Firebase Auth
- Tailwind CSS
- TMDB API

## Project Structure

```text
src/
	components/
		Header.js
		MainContainer.js
		MovieCard.js
		MovieList.js
		SecondaryContainer.js
		ShimmerUI.js
		VideoBackground.js
		VideoTitle.js
	hooks/
		useMovieVideo.js
		useNowPlayingMovies.js
	pages/
		Browse.js
		Error.js
		Login.js
	routes/
		AppRoutes.js
	utils/
		appStore.js
		constants.js
		firebase.js
		movieSlice.js
		userSlice.js
		validate.js
```

## Routes

- `/`: login and sign-up page
- `/browse`: authenticated browsing page with hero trailer and movie rows
- `*`: fallback error page

## Environment Variables

Create a `.env` file in the project root and define these values:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_NETFLIX_LOGO_URL=your_logo_url
REACT_APP_PROFILE_PHOTO_URL=your_profile_photo_url
REACT_APP_TMDB_API_TOKEN=your_tmdb_bearer_token
REACT_APP_TMDB_PHOTO_URL=https://image.tmdb.org/t/p/w500
```

Use `.env.example` as the template.

## Installation

```bash
npm install
```

## Run Locally

```bash
npm start
```

The app will start on the default Create React App development server.

## Build

```bash
npm run build
```

## Current State Management

- `user` slice stores the authenticated Firebase user
- `movies` slice stores now-playing movies and trailer information
- Auth updates are driven from Firebase auth state changes in the header flow

## Notes

- TMDB requests use a bearer token from env variables
- The hero trailer uses the first available trailer returned by TMDB for the selected movie
- If you change `.env`, restart the dev server so React reloads the variables