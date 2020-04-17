import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <h2>Enter 3 ingredients, I give you 5 recipes</h2>
      <div id="searcharea">
        <input type="text" placeholder="Your ingredients" id="bar" />
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/icone-loupe-png-2.png"
          id="searchsubmit"
          alt="loupe"
        />
      </div>
      <div />
      <input type="button" value="Advanced research" id="advancedbutton" />
    </div>
  );
}

export default SearchBar;
