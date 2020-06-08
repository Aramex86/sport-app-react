import React from 'react';
import Navigation from './Navigation';
import Phone from './Phone';
import Logo from './Logo';
import SearchBar from './Search-Bar/Search-bar';



const HeaderBottom = (props) =>{
    return(
        <div className="headerbottom-wrapp">
            <div className="headerbottom-wrapp-container">
                    <Logo/>
                <div className="headerbottom-wrapp-rigth">
                    <Phone/>
                    <Navigation/>
                </div>
            </div>
            <SearchBar/>
        </div>
    )
}



export default HeaderBottom;