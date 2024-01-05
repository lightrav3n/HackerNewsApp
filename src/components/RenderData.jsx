import React from "react";

const RenderData = ({ articles }) => {
  // object destructuring: `articles` is the property being extracted from the object passed as a parameter to the component.
  return (
    <div>
      {articles.length > 0 ? (
        <>
          <h2>Search Results:</h2>
          <ul>
            {articles.map((article) => (
              //iterate over each element in the articles array
              article.title && (
             <li key={article.id}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {/* 
             - rel="noopener noreferrer" - 
            These are security attributes. They help protect against potential security vulnerabilities that could be exploited by opening the link in a new tab. noopener prevents the new tab from having access to the window.opener property, and noreferrer prevents sending the Referer HTTP header, enhancing user privacy.
            */}
                   {article.title}  - by <b>{article.author}</b>  
                   {/* Trim removes leading and trailing whitespaces from the title */}
                </a>
              </li>
            )))}
          </ul>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default RenderData;
