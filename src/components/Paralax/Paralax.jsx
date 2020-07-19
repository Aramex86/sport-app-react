import React from "react";
import ShopNowBtn from "../common/shopNowBtn";

export default function Paralax(props) {
  return (
    <section className="paralax__wrapp">
      <div className="paralax__wrapp-text">
        <ul className="paralax__wrapp-text-list">
            <li className="paralax__wrapp-text-item1">Starting From $ 599.00</li>
            <li className="paralax__wrapp-text-item2">Exlusive <span>Offer</span> In</li>
            <li className="paralax__wrapp-text-item3">Branded Glows</li>
        </ul>
        <ShopNowBtn />
      </div>
     
    </section>
  );
}
