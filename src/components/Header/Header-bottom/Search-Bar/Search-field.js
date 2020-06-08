import React from 'react';
import Icons from '../../../common/Icons';

const SearchField = (props) => {
    return (
        <div className="search-wrapp">
           <input type="text" placeholder="Search our catalog" className="search-wrapp-input"/>
           <button className="search-wrapp-icon"><Icons icon="search" size={17}/></button>
        </div>
    );
};

export default SearchField;

//<Icons icon="search"/>