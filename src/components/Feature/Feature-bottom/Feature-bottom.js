import React from "react";
import Icons from "../../common/Icons";

function FeatureBottom() {
  return (
    <section className="featurebottom__wrapp">
      <div className="featurebottom__wrapp-item">
        <Icons icon="truck" color='white'  size={40 } className="featurebottom__wrapp-icon"/>
        <h4 className="featurebottom__wrapp-heading">Free Shipping</h4>
        <span className="featurebottom__wrapp-botomtext">All Order Over $100</span>
      </div>
      <div className="featurebottom__wrapp-item">
        <Icons icon="coin-dollar" color='white' size={40 } className="featurebottom__wrapp-icon"/>
        <h4 className="featurebottom__wrapp-heading">Money Back Gurantee</h4>
        <span className="featurebottom__wrapp-botomtext">If You are Unable</span>
      </div>
      <div className="featurebottom__wrapp-item">
        <Icons icon="headset_mic" color='white' size={40 } className="featurebottom__wrapp-icon"/>
        <h4 className="featurebottom__wrapp-heading">24 X 7 online Support</h4>
        <span className="featurebottom__wrapp-botomtext">Call Us Anytime You Want</span>
      </div>
      <div className="featurebottom__wrapp-item">
        <Icons icon="rocket" color='white' size={40 } className="featurebottom__wrapp-icon"/>
        <h4 className="featurebottom__wrapp-heading">100% Satisfaction</h4>
        <span className="featurebottom__wrapp-botomtext">Save hundreds Of Dollars</span>
      </div>
    </section>
  );
}

export default FeatureBottom;
