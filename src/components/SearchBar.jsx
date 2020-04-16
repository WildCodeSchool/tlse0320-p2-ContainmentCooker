import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <div id="container">
        <div id="searcharea">
          <input type="text" placeholder="Enter 3 ingredients, I give you 5 recipes" id="bar" />
          <img
            src="https://pngimage.net/wp-content/uploads/2018/06/icone-loupe-png-2.png"
            id="searchsubmit"
            alt="loupe"
          />
        </div>
        <div />
        <input type="submit" value="Advanced research" id="advancedbutton" />
      </div>
    </div>
  );
}

export default SearchBar;
