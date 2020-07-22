import React from "react";
import Icon from "./Icons";
import AddToChartBtn from "./AddToChartBtn";

export default function ProductCard({price,discount,image,name}) {
  
  const discountPrice = Math.round((price * discount) / 100);
  const newPrice = price - discountPrice;
  return (
    <div className="card__wrapp">
      <div className="card__wrapp-image--wrap">
        <img src={image} alt="img" />
        {discount ? <span>{`${discount}%`}</span> : ""}
        {/* <span>{props.discount}</span> */}
        <div className="card__wrapp-eye">
          <Icon icon="eye" size={30} />
        </div>
      </div>
      <div className="card__wrapp-desc--wrap">
        <div className="card__wrapp-desc--wrap-raiting">
          <Icon icon="star-empty" size={17} color="orangered" />
          <Icon icon="star-empty" size={17} color="orangered" />  
          <Icon icon="star-empty" size={17} color="orangered" />
          <Icon icon="star-empty" size={17} color="orangered" />
          <Icon icon="star-empty" size={17} color="orangered" />
        </div>
        <div className="card__wrapp-desc--wrap-name">{name}</div>
        <div className="card__wrapp-desc--wrap-priceWrapp">
          <div className="card__wrapp-desc--wrap-price">
            <Icon icon="eur" size={13} />
            {newPrice ? newPrice : price}
          </div>
          <div className="card__wrapp-desc--wrap-oldprice">
          {/* <Icon icon="eur" size={13} /> */}
          discount?<Icon icon="eur" size={13} /> :""}
            {discount?price :""}
           
          </div>
        </div>
        <AddToChartBtn />
      </div>
    </div>
  );
}
//star-full