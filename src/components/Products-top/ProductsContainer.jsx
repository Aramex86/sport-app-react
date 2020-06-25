import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import FeatureProducts from "./FeatureProducts";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";

class ProductsContainer extends Component {
  render() {
    return (
      <section className="products__wrapp">
        <div className="products__wrapp-header">
          <nav className="products__wrapp-header-nav">
            <Link
              to="/featuresproducts"
              className="products__wrapp-header-link"
            >
              Feature Products
            </Link>
            <Link to="/bestsellers" className="products__wrapp-header-link">
              Best Sellers
            </Link>
            <Link to="/newarrivals" className="products__wrapp-header-link">
              New Arrivals
            </Link>
          </nav>

          <div className="btn__wrapp">
            <button className="btn-prev">prev</button>
            <button className="btn-next">next</button>
          </div>
        </div>
        <Route path="/featuresproducts" render={() => <FeatureProducts />} />
        <Route path="/bestsellers" render={() => <BestSellers />} />
        <Route path="/newarrivals" render={() => <NewArrivals />} />
      </section>
    );
  }
}

export default ProductsContainer;
