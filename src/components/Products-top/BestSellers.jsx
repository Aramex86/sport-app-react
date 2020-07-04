import React from 'react';
import ProductCard from "./ProductCard";

export default function BestSellers(props) {
    const product = props.products1.map((p,i) => (
        <ProductCard
          image={p.img}
          name={p.name}
          price={p.price}
          discount={p.discount}
          key={i}
        />
      ));
    return <div className="bestsellers">{product}</div>
}
