
import React from 'react';
import './css/Product.css'

const Product = ({ product, addToCart }) => {
    return (
            <div class="card">
                <img src={product.image} class="cardImg" alt={product.name} />
                <center><div className="card-title">{product.name}</div></center>
                <center><div className="card-info">&#8377; {product.price}</div></center>
                <center><button id="add" onClick={addToCart}>Add to cart</button></center>
            </div>
    );
};

export default Product;
