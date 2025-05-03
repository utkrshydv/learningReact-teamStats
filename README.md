# learningReact-teamStats

This project is a **Football Team Stats Viewer** web application built with **React** and **Vite**. It allows users to browse through a list of football teams, search for specific teams, and view detailed information about each team, including their logo, founding year, city, stadium, and league. This is my first solo project without taking help from any tutorial. I enjoyed building this.

## Features

- **Search Functionality**: Search for football teams by name.
- **Team Details**: View detailed information about each team, including their logo, founding year, city, stadium, and league.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Custom Data**: Includes a custom team, "Robbers FC," with predefined data.

---

## How It Works

1. **Team List**:
   - The application displays a grid of football team logos.
   - Users can search for teams using the search bar in the header.

2. **Search Functionality**:
   - The search bar filters the list of teams based on the user's input.

3. **Team Details**:
   - Clicking on a team logo opens a modal displaying detailed information about the team.
   - The data is fetched from the [TheSportsDB API](https://www.thesportsdb.com/) for most teams.
   - For "Robbers FC," custom data is displayed.

4. **Modal**:
   - The modal displays the team's logo, founding year, city, stadium, and league.
   - Clicking outside the modal or on the overlay closes it.

---

## Project Structure

### Key Files and Directories

- **`src/`**: Contains the main source code for the application.
  - **`App.jsx`**: The root component that combines the header, team grid, and modal.
  - **`components/`**: Contains reusable React components:
    - **`Header.jsx`**: Displays the app's header with a search bar.
    - **`Teamlogo.jsx`**: Displays a team's logo and name.
    - **`Modal.jsx`**: Displays detailed information about a selected team in a modal.
  - **`utils/`**: Contains utility files:
    - **`teamLogos.js`**: Includes the list of team logos.
  - **`index.css`**: Stylesheet for the application.
- **`public/`**: Contains static assets like team logos.
- **`index.html`**: The main HTML file for the app.
- **`vite.config.js`**: Configuration file for Vite.

---
Note to Self
In hindsight, I should have explored the API documentation before diving in, doing so would have saved a lot of time and effort. I’ve likely made a few mistakes along the way, but I think they'll go away as I learn more. 

