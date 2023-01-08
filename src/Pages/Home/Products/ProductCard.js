import React from 'react';

const ProductCard = ({product}) => {
    const {name, img, price } = product;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2 text-center">
		
		<h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
        <span className="block tracking-widest uppercase text-2xl text-orange-900 font-semibold">Price: ${price}</span>
        <button className="btn bg-orange-600 hover:btn-warning my-3 px-5 w-full">Buy Now</button>
	</div>
	
</div>

        </div>
    );
        
};

export default ProductCard;