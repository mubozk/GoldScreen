# CineCompass

CineCompass is a mobile application developed using React Native, designed to provide users with comprehensive information about movies. Users can search for movies, view detailed information including synopsis, ratings, and release dates, and manage a list of their favorite movies. Firebase is utilized for user authentication and data storage, while the TMDB (The Movie Database) API supplies movie data.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Hooks](#hooks)
- [Context](#context)
- [Navigation](#navigation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Movie Search**: Search for movies by title.
- **Detailed Movie Information**: View detailed information including synopsis, ratings, release dates, and posters.
- **Favorites Management**: Add or remove movies from your favorites list.
- **User Authentication**: Secure login, registration, and session management using Firebase.

## Screenshots
<img height="400" width="192" alt="0" src="https://github.com/sarpbozk/GoldScreen/assets/62714901/315b2ff1-5e6b-44ee-81dd-7d6b70bd67db">
<img height="400" width="192" alt="1" src="https://github.com/sarpbozk/GoldScreen/assets/62714901/595f9eaf-5f5d-44e0-a518-ebc889040aa6">
<img height="400" width="192" alt="2" src="https://github.com/sarpbozk/GoldScreen/assets/62714901/4b4b1b9d-6883-4d6d-8d31-92bf8dc1c57c">
<img height="400" width="192" alt="3" src="https://github.com/sarpbozk/GoldScreen/assets/62714901/19b51fce-fd48-494c-ae34-31df599e52ed">
<img height="400" width="192" alt="4" src="https://github.com/sarpbozk/GoldScreen/assets/62714901/0f5d0ccc-d57f-45cb-90b5-a2d5ab5a7d87">



## Demo Video

[Watch the Demo Video](https://youtu.be/k9M40DojTFc)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js from [Node.js official site](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI globally by running `npm install -g expo-cli`.
- **Firebase Account**: Set up a Firebase project and enable authentication.

## Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/goldscreen.git
    cd cinecompass
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Set Up Firebase**:
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Email/Password Authentication.
    - Add your Firebase configuration to `src/constants/config.jsx`.

4. **Start the Expo Server**:
    ```sh
    expo start
    ```

5. **Run on Your Device**:
    - Install the Expo Go app on your iOS or Android device.
    - Scan the QR code displayed in the terminal or browser to run the application.

## Usage

Once the project is set up and running, you can:

- Search for movies using the search bar.
- View detailed information about movies.
- Add or remove movies from your favorites list.
- Register and log in to manage your favorites.

## Project Structure

This project is organized as follows:

- **App.js**: Entry point of the application.
- **assets**: Contains static assets such as images, fonts, etc.
- **src**
  - **api**: Contains API-related files.
    - `tmdb.jsx`: Handles communication with The Movie Database (TMDb) API.
  - **components**: Contains reusable components used across the application.
    - `favourite.button.jsx`: Button component for marking a movie as favorite.
    - `loading_view.jsx`: Component for displaying a loading view.
    - `movie_card.jsx`: Component for displaying a movie card.
    - `movie_item.jsx`: Component for displaying a movie item.
    - `results_list.jsx`: Component for displaying a list of results.
    - `search_bar.jsx`: Component for the search bar.
  - **constants**: Contains application-wide constants.
    - `colors.jsx`: Defines color constants used in the application.
    - `config.jsx`: Configuration settings for the application.
  - **contexts**: Contains context providers for managing global state.
    - `app.context.jsx`: Context for the general app state.
    - `authentication.context.jsx`: Context for authentication state.
    - `favourites.context.jsx`: Context for managing favorite movies.
  - **hooks**: Custom hooks used throughout the application.
    - `app.hooks.jsx`: Custom hooks related to app state.
    - `favourites.hooks.jsx`: Custom hooks related to favorite movies.
    - `movie_details.hooks.jsx`: Custom hooks for movie details.
    - `movie_lists.hooks.jsx`: Custom hooks for movie lists.
    - `search.hooks.jsx`: Custom hooks for search functionality.
  - **navigation**: Contains navigation-related files.
    - `account.navigator.jsx`: Navigator for account-related screens.
    - `index.jsx`: Entry point for navigation.
    - `navigation_actions.jsx`: Custom navigation actions.
    - `screens.navigator.jsx`: Navigator for main screens.
  - **reducers**: Contains reducers for managing state.
    - `app.reducer.jsx`: Reducer for the app state.
    - `favourites.reducer.jsx`: Reducer for favorite movies.
  - **screens**: Contains screen components.
    - **account**
      - `account.screen.jsx`: Screen for account management.
      - `login.screen.jsx`: Screen for user login.
      - `register.screen.jsx`: Screen for user registration.
    - `movie_details.screen.jsx`: Screen for displaying movie details.
    - `search.screen.jsx`: Screen for search functionality.
    - `search_results.screen.jsx`: Screen for displaying search results.
  - **services**: Contains service files for handling business logic.
    - `authentication.service.jsx`: Service for handling authentication.

- **package.json**: Contains project dependencies and scripts.



## Components

- **FavouriteButton**: Displays a button to add or remove a movie from the favorites list.
- **LoadingView**: Displays a loading spinner.
- **MovieCard**: Displays a movie card with an image and title.
- **MovieItem**: Displays a movie item in a list with an image, title, release date, and rating.
- **ResultsList**: Displays a list of search results.
- **SearchBar**: Provides an input field for users to search for movies.

## Hooks

- **useAppHooks**: Manages application-wide state including theme and loading state.
- **useFavourites**: Manages the favorites list, including adding and removing favorites and persisting data with AsyncStorage.
- **useDetails**: Fetches and manages detailed movie information from the TMDB API.
- **useMovieLists**: Fetches and manages lists of popular and upcoming movies from the TMDB API.
- **useResults**: Manages the search functionality and results.

## Context

- **AppContext**: Provides application-wide state and dispatch functions.
- **AuthenticationContext**: Manages user authentication state and functions.
- **FavouritesContext**: Manages the favorites list state and functions.

## Navigation

- **AccountNavigator**: Handles navigation between account-related screens (login, register).
- **ScreensNavigator**: Handles navigation between main application screens (search, results, details).
- **NavigationActions**: Provides navigation functions such as push, pop, and reset.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

