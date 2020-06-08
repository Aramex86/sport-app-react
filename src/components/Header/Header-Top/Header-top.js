import React from 'react';
import Headersocial from './Header-social';
import Language from './Language';
import Curency from './Curency';


const HeaderTop =(props)=>{
    return(
        <div className="headerTop-wrapp">
            <div>
                <Headersocial/>
                <Language/>
                <Curency/>
            </div>
        </div>
    )   
}

export default HeaderTop;