import React from 'react'
import ProductCard from './ProductCard';

export default function FeatureProducts(props) {
    const product = props.products.map(p => <ProductCard image={p.img}/>)

    return (
        <div className="featureproducts">
            {product}
        </div>
    )
}
