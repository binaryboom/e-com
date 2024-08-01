import React from 'react';
import Product from './Product';


const ProductList = ({ products ,addToCart ,category,range,search}) => {
    const filteredProducts = products.filter(product =>
        (category === 'none' || product.category === category) &&
        (range === 'none' || (
            (range === '200' && product.price >= 1 && product.price <= 200) ||
            (range === '500' && product.price > 200 && product.price <= 500) ||
            (range === '500above' && product.price > 500)
        )) &&
        (search === '' || product.name.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className='card-container'>
            {/* {products
            .filter(product => 
               (category === 'none' || product.category === category) &&
               (range === 'none' || (
                  (range === '200' && product.price >= 1 && product.price <= 200) ||
                  (range === '500' && product.price > 200 && product.price <= 500) ||
                  (range === '500above' && product.price > 500)
               ))  &&
               (search === '' || product.name.toLowerCase().includes(search.toLowerCase()))
            )
            .map(product => (
               <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
            ))} */}
           
            {filteredProducts.length === 0 ? (
                <h1>No Products Found <i class="fa-regular fa-face-frown"></i></h1>
            ) : (
                filteredProducts.map(product => (
                    <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
                ))
            )}
        
            {/* {products.map(product => (
                <Product key={product.id} product={product} addToCart={()=>{addToCart(product)}} />
            ))} */}
        </div>
    );
};

export default ProductList;
