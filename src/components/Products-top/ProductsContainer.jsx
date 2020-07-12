import React, { Component } from "react";
import FeatureProducts from "./FeatureProducts";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import { connect } from "react-redux";
import {setRating} from '../Store/Products-top/featureProducts-reducer';

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

          {/* <div className="btn__wrapp">
            <button className="btn-prev">prev</button>
            <button className="btn-next">next</button>
          </div> */}
        </div>

        {this.state.f ? <FeatureProducts {...this.props}/> : <div></div>}
        {this.state.b ? <BestSellers {...this.props} /> : <div></div>}
        {this.state.n ? <NewArrivals {...this.props} /> : <div></div>}
      </section>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    products: state.featureProd.products,
    products1: state.bestSellers.products1,
    products2: state.newArrival.products2,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    rateItem:(rating)=>{
      dispatch(setRating(rating))
    }
  };
};

let ProductsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

export default ProductsComponent;
