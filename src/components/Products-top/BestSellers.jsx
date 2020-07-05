import React from "react";
import ProductCard from "./ProductCard";

export default function BestSellers(props) {
  const newProd = [];

  for (let i = 0; i < props.products1.length; i++) {
    //console.log(props.products1[i]);
    const random =props.products1[Math.floor(Math.random() * props.products1.length)];
      newProd.push(random);
    
  }
  console.log(newProd);

  const product = newProd.map((p, i) => (
    <ProductCard
      id={p.id}
      image={p.img}
      name={p.name}
      price={p.price}
      discount={p.discount}
      key={i}
    />
  ));
  return <div className="bestsellers">{product}</div>;
}
