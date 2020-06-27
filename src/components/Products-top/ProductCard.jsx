import React from "react";
import Icon from "../common/Icons";
import AddToChartBtn from "../common/AddToChartBtn";

export default function ProductCard(props) {
  return (
    <div className="card__wrapp">
      <div className="card__wrapp-image--wrap">
        <img src={props.image} alt="img" />
        <span>-20%</span>
        <div className="card__wrapp-eye">
          <Icon icon="eye" size={30} />
        </div>
      </div>
      <div className="card__wrapp-desc--wrap">
          <div className="card__wrapp-desc--wrap-raiting">
              <Icon icon="star-full" size={17} color='orangered'/>
              <Icon icon="star-full" size={17} color='orangered'/>
              <Icon icon="star-empty" size={17} color='orangered'/>
              <Icon icon="star-empty" size={17} color='orangered'/>
              <Icon icon="star-empty" size={17} color='orangered'/>
          </div>
          <div className="card__wrapp-desc--wrap-name">name of product</div>
          <div className="card__wrapp-desc--wrap-price">$20</div>
      </div>
      <AddToChartBtn/>
    </div>
  );
}