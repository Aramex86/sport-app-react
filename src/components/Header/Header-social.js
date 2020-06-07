import  React from 'react';
import Icons from '../common/Icons'

const Headersocial = (props) => {
    return (

        <div className="social-wrapp">
          <ul className="social__list">
          <li className="social__list-item"><a href="#facebook" className="social__list-link"><Icons icon="facebook" size={15}/></a></li>    
          <li className="social__list-item"><a href="#twitter" className="social__list-link"><Icons icon="twitter" size={15}/></a></li>    
          <li className="social__list-item"><a href="#instagram" className="social__list-link"><Icons icon="instagram" size={15}/></a></li>    
          <li className="social__list-item"><a href="#pinterest" className="social__list-link"><Icons icon="pinterest" size={15}/></a></li>    
          <li className="social__list-item"><a href="#youtube" className="social__list-link"><Icons icon="youtube" size={15}/></a></li>    
          </ul> 
        </div>
    );
};

export default Headersocial;