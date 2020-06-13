import React from 'react';
import Icons from '../../../common/Icons';

const Profile = (props) => {
    return (
        <div className="profile-wrapp">
            <Icons icon="user-o"  size={30} className="user"/>
           <Icons icon="shopping-bag" size={30} className="shoping"/>
           <div className="item-count">0</div>
           <div className="summ">
           <Icons icon='eur' size={16} className="currency"/> 0.00
           </div>
           
        </div>
    );
};

export default Profile;

