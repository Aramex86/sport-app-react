import React from 'react';
import Navigation from './Navigation';
import Phone from './Phone';
import Logo from './Logo';



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
        </div>
    )
}



export default HeaderBottom;