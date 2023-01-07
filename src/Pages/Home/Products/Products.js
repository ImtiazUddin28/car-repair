import React, {useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
	const [products, setProducts] = useState([]);
    
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    }, []);
    return (

		<div>
            <div className='text-center mb-4'>
                
                <h2 className="text-5xl font-bold text-orange-600">Our Popular Products</h2>
                <p className='m-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center'><button className='btn btn-primary my-5'>View All Products</button></div>
            
        </div>
        

	)
};

export default Products;
