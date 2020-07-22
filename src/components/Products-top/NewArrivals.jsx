import React from 'react';
import ProductCard from "../common/ProductCard";

export default function NewArrivals(props) {
    const product = props.products.map((p, i) => (
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
