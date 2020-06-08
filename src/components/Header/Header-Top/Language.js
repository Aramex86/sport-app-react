import React from 'react';
import eng from '../../../assets/usa.png';
// import spa from '../../../assets/spain.png';
// import rus from '../../../assets/russia.png';
import Icons from '../../common/Icons';

const Language = (props) => {
    return (
        <div className="lang-wrapp">
           <ul className="lang-wrapp-list">
               <li className="lang-wrapp-item">
                    <img src={eng} alt="usa"/>English
                    <span>
                        <Icons icon='chevron-down1'/>
                    </span>
                </li>
              {/*  <li className="lang-wrapp-item"> <img src={rus} alt="rus"/>Russian</li>
               <li className="lang-wrapp-item"> <img src={spa} alt="spa"/>Spanish</li> */}
           </ul>
           
           
        </div>
    );
};

export default Language;