import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import FeatureProducts from "./FeatureProducts";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import { connect } from "react-redux";

class ProductsContainer extends Component {
  render() {
    return (
      <section className="products__wrapp">
        <div className="products__wrapp-header">
          <nav className="products__wrapp-header-nav">
            <Link to="/featureproducts" className="products__wrapp-header-link">
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
        <Switch>
          <Route
            path="/featureproducts"
            render={() => <FeatureProducts {...this.props} />}
          />
          <Route
            path="/bestsellers"
            render={() => <BestSellers {...this.props} />}
          />
          <Route path="/newarrivals" render={() => <NewArrivals />} />
        </Switch>
      </section>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    products: state.featureProd.products,
    products1: state.BestSellers.products1,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

let ProductsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

export default ProductsComponent;
