import React, { useState, useEffect } from 'react';
import UserInput from './components/UserInput';
import RenderData from './components/RenderData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // searchTerm: Stores the user's input for the search term.
  
  const [articles, setArticles] = useState([]);
   // articles: Stores the fetched articles from the Hacker News API.

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
        );
        // Uses the fetch function to make an HTTP request.
        const data = await response.json();
        // Parses the response as JSON using response.json().
        setArticles(data.hits);
        // Updates the articles state with the fetched data using setArticles. hits in this case is the name of the object containing the articles
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    if (searchTerm) {
      fetchArticles();
      //we recursively call the fetch function when a search term is found
    }
  }, [searchTerm]);
  // the effect will run whenever the searchTerm variable changes
  // this component: `setSearchTerm(newTerm)` (UserInput.jsx, line: 13), will trigger the useEffect to run again with the updated searchTerm

  return (
    <div>
      <UserInput setSearchTerm={setSearchTerm} />
      <RenderData articles={articles} />
    </div>
  );
};

export default App;
