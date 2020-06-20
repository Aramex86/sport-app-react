import React from "react";
import { connect } from "react-redux";
import Feature from './Feature';

class FeatureConainer extends React.Component {
    
  render() {
      const{
          products
      }=this.props;
    
    return <Feature {...this.props}/>;
  }
}
let mapStateToProps=(state)=>{
   return{products:state.feature.products}
}

let mapDispatchToProps=(dispatch)=>{
    return{}
}

let FeatureCompoponent = connect(mapStateToProps,mapDispatchToProps)(FeatureConainer)
export default FeatureCompoponent;
