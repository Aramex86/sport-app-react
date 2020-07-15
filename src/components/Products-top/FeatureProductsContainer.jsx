import React, { Component } from 'react';
import FeatureProducts from './FeatureProducts';
import { connect } from 'react-redux';
import {setRating} from '../Store/Products-top/featureProducts-reducer';

class FeatureProductsContainer extends Component {
  render() {
    return <FeatureProducts {...this.props}/>
  }
}

const mapStateToProps =state=>{
  return{
    products:state.featureProd.products
  }
}
 
const mapDispatchToProps= dispatch =>{
  return{
    setStar:(rating)=>{
      dispatch(setRating(rating));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FeatureProductsContainer)  ;
