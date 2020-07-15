import React, { Component,useState } from "react";
import FeatureProductsContainer from "./FeatureProductsContainer";
import BestSellersContainer from "./BestSellersContainer";
import NewArrivalsContainer from "./NewArrivalsContainer";

const ProductsContainerWithHooks = (props) => {
  const [f, setF] = useState(true);
  const [b, setB] = useState(false);
  // const [n, setN] = useState(false);

   const showFeature = () => {
    if (setF === false) {
      f= true;
    }else{
      f=false;
    }
  };
  const showBest=()=> {
    if (b === false) {
        setB= true;
    }
    
  };
//  const showNewArrivals = () => {
//     if (setN === false) {
//         setF= false;
//         setB= false;
//         setN= true;
//     }
//   };

  return (
    <section className="products__wrapp">
      <div className="products__wrapp-header">
        <nav className="products__wrapp-header-nav">
          <button
            className="products__wrapp-header-link"
            onClick={showFeature}
          >
            Feature Products
          </button>
          <button
            className="products__wrapp-header-link"
            onClick={showBest}
          >
            Best Sellers
          </button>
          <button
            className="products__wrapp-header-link"
            // onClick={showNewArrivals}
          >
            New Arrivals
          </button>
        </nav>
      </div>

      {f? <FeatureProductsContainer /> : <div></div>}
      {b? <BestSellersContainer /> : <div></div>}
      {/* {n? <NewArrivalsContainer /> : <div></div>} */}
    </section>
  );
};

export default ProductsContainerWithHooks;
