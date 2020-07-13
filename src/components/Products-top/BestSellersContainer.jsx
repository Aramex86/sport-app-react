import React, { Component } from 'react';
import BestSellers from './BestSellers';
import { connect } from 'react-redux';

class BestSellersContainer extends Component {
  render() {
    return <BestSellers {...this.props}/>
  }
}
const mapStateToProps =state=>{
  return{
    products:state.bestSellers.products
  }
}
 
const mapDispatchToProps= dispatch =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BestSellersContainer);
