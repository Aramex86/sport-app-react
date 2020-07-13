import React, { Component } from "react";
import NewArrivals from "./NewArrivals";
import { connect } from "react-redux";

class NewArrivalsContainer extends Component {
  render() {
    return <NewArrivals {...this.props} />;
  }
}
const mapStateToProps =state=>{
  return{
    products:state.newArrival.products
  }
}
 
const mapDispatchToProps= dispatch =>{
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewArrivalsContainer) ;
