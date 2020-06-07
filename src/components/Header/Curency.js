import React from 'react';
import Icons from '../common/Icons';

const Curency = (props) => {
    return (
        <div className="curency-wrapp">
            <ul className="curency-wrapp-list">
                <li className="curency-wrapp-item">
                <Icons icon='eur' size={13}/>  Euro  <Icons icon='chevron-down1' size={15}/>
                </li>
                {/* <li className="curency-wrapp-item">
                <Icons icon='dollar, usd'/>  Dolar
                </li> */}
            </ul>
        </div>
    );
};

export default Curency;