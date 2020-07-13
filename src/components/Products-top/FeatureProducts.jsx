import React from "react";
import ProductCard from "./ProductCard";

 const FeatureProducts=(props)=> {
  const product = props.products.map((p, i) => (
    <ProductCard
      image={p.img}
      name={p.name}
      price={p.price}
      discount={p.discount}
      key={i}
      rating={p.rating}
      setStar={props.setStar}
    />
  ));

  return <div className="featureproducts">{product}</div>;
}

export default FeatureProducts;