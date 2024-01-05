# Hacker News Search App

This React app allows users to search for articles on Hacker News based on a given search term. It utilizes the Hacker News API to fetch relevant articles and displays them in a list format.

## Project Overview

The Hacker News Search App is structured with three main components:

1. **App Component**: The root component managing the overall structure of the application.
2. **UserInput Component**: A nested component responsible for rendering the input field and search button.
3. **RenderData Component**: Another nested component handling the rendering of the fetched articles in a list format.

## Features

- Users can enter a search term in the input field.
- Clicking the search button triggers a request to the Hacker News API.
- The app displays a list of links with titles for articles that match the search term.

## Project Structure

```plaintext
/src
|-- App.js
|-- UserInput.js
|-- RenderData.js
|-- index.js
