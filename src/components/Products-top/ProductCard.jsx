import React from "react";
import Icon from "../common/Icons";
import AddToChartBtn from "../common/AddToChartBtn";

export default function ProductCard(props) {
  
  const discountPrice = Math.round((props.price * props.discount) / 100);
  const newPrice = props.price - discountPrice;
  return (
    <div className="card__wrapp">
      <div className="card__wrapp-image--wrap">
        <img src={props.image} alt="img" />
        {props.discount ? <span>{`${props.discount}%`}</span> : ""}
        {/* <span>{props.discount}</span> */}
        <div className="card__wrapp-eye">
          <Icon icon="eye" size={30} />
        </div>
      </div>
      <div className="card__wrapp-desc--wrap">
        <div className="card__wrapp-desc--wrap-raiting">
  <span>{props.rating}</span> <button onClick={props.setStar()}>click</button>
          <Icon icon="star-empty" size={17} color="orangered" />
          <Icon icon="star-empty" size={17} color="orangered" />  
          <Icon icon="star-empty" size={17} color="orangered" />
          <Icon icon="star-empty" size={17} color="orangered" />
          <Icon icon="star-empty" size={17} color="orangered" />
        </div>
        <div className="card__wrapp-desc--wrap-name">{props.name}</div>
        <div className="card__wrapp-desc--wrap-priceWrapp">
          <div className="card__wrapp-desc--wrap-price">
            <Icon icon="eur" size={13} />
            {newPrice ? newPrice : props.price}
          </div>
          <div className="card__wrapp-desc--wrap-oldprice">
          {/* <Icon icon="eur" size={13} /> */}
          {props.discount?<Icon icon="eur" size={13} /> :""}
            {props.discount?props.price :""}
           
          </div>
        </div>
        <AddToChartBtn />
      </div>
    </div>
  );
}
//star-full