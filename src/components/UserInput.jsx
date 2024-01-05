import React, { useState } from "react";

const UserInput = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    //event handler that gets called whenever the value of the input field changes.
    setInputValue(event.target.value);
    // update the inputValue state with the new value entered by the user.
  };

  const handleButtonClick = () => {
    setSearchTerm(inputValue);
    // update the searchTerm state with the current value of inputValue.
    // it will trigger the useEffect (App.jsx, line: 32) to run again with the updated searchTerm
};
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div>
      <input
        onKeyPress={handleKeyPress}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search Hacker News"
       
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default UserInput;
