import React from 'react';

const WithproductItems = (Component) => {
    return (props) => {
        return(
            <Component {...props}/>
        )
        
    }
}

export default WithproductItems;
