import React from "react";
import ProductCard from "./ProductCard";

export default function FeatureProducts(props) {
  const product = props.products.map((p) => (
    <ProductCard
      image={p.img}
      name={p.name}
      price={p.price}
      discount={p.discount}
    />
  ));

  return <div className="featureproducts">{product}</div>;
}
