import React, { Component } from "react";
import FeatureProductsContainer from "./FeatureProductsContainer";
import BestSellersContainer from "./BestSellersContainer";
import NewArrivalsContainer from "./NewArrivalsContainer";

class ProductsContainer extends Component {
  state = {
    f: true,
    b: false,
    n: false,
  };

  showFeature = () => {
    if (this.state.f === false) {
      this.setState({
        f: true,
        b: false,
        n: false,
      });
    }
  };
  showBest = () => {
    if (this.state.b === false) {
      this.setState({
        f: false,
        b: true,
        n: false,
      });
    }
  };
  showNewArrivals = () => {
    if (this.state.n === false) {
      this.setState({
        f: false,
        b: false,
        n: true,
      });
    }
  };

  render() {
    return (
      <section className="products__wrapp">
        <div className="products__wrapp-header">
          <nav className="products__wrapp-header-nav">
            <button
              className="products__wrapp-header-link"
              onClick={this.showFeature}
            >
              Feature Products
            </button>
            <button
              className="products__wrapp-header-link"
              onClick={this.showBest}
            >
              Best Sellers
            </button>
            <button
              className="products__wrapp-header-link"
              onClick={this.showNewArrivals}
            >
              New Arrivals
            </button>
          </nav>
        </div>

        {this.state.f ? <FeatureProductsContainer /> : <div></div>}
        {this.state.b ? <BestSellersContainer /> : <div></div>}
        {this.state.n ? <NewArrivalsContainer /> : <div></div>}
      </section>
    );
  }
}

export default ProductsContainer;
