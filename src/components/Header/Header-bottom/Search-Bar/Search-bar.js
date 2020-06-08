import React from 'react';
import NavBar from './Nav-bar';
import SearchField from './Search-field';
import Profile from './Profile';

const SearchBar = (props) => {
    return (
        <div className="searchbar-wrapp">
            <div className="search-container">
                <NavBar/>
                <SearchField/>
                <Profile/>
            </div>
        </div>
    );
};

export default SearchBar;