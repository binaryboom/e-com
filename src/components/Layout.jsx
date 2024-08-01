import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";
import allProducts from "./allProducts"
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useState } from 'react';
import Filter from "./Filter";

function Layout() {
    const [page, setPage] = useState('home');
    let [category, setCategory] = useState('none');
    let [range, setRange] = useState('none');
    function filterByCategory(value) {
        setCategory(value);
    }
    function filterByPrice(value) {
        setRange(value);
    }
    function goToPage(pg) {
        setPage(pg);
    }

    let [search,setSearch]=useState('')
    function searchProduct(value){
        setSearch(value);
    }

    let [cart, setCart] = useState([])

    function addToCart(item, qty = 1) {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (item.qtyAvailable <= 0) {
                window.alert("Item is out of stock");
                return prevCart; // Do not update cart if item is out of stock
            }

            if (existingItem) {
                if (existingItem.qtyAvailable <= 0) {
                    window.alert("Item is out of stock");
                    return prevCart; // Do not update cart if item is out of stock
                }

                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            qtySelected: cartItem.qtySelected + qty,
                            qtyAvailable: cartItem.qtyAvailable - qty
                        }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, qtySelected: 1, qtyAvailable: item.qtyAvailable - 1 }];
            }
        });

        console.log(cart);
    }
   
    function removeFromCart(item, qty = 1) {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

            if (!existingItem) {
                return prevCart; // Item not in cart, so no change
            }
            if (existingItem.qtySelected === qty) {
                return prevCart.filter(cartItem => cartItem.id !== item.id);
            }

            if (existingItem.qtySelected > 1) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            qtySelected: cartItem.qtySelected - qty,
                            qtyAvailable: cartItem.qtyAvailable + qty
                        }
                        : cartItem
                );
            } else {
                return prevCart.filter(cartItem => cartItem.id !== item.id);
            }
        });

        console.log(cart);
    }




    return (
        <div className="main">
            {console.log(page)}
            <Navbar goToPage={goToPage} cartQty={cart.length} searchProduct={searchProduct} filterByCategory={filterByCategory} filterByPrice={filterByPrice}/>

            <Filter page={page}  filterByCategory={filterByCategory} filterByPrice={filterByPrice} />

            {page === 'cart' ? (
                <Cart products={cart} removeFromCart={removeFromCart} addToCart={addToCart} goToPage={goToPage} setCart={setCart} />
            ) : page === 'home' ? (
                <ProductList products={allProducts} addToCart={addToCart} category={category}  range={range} search={search}/>
            ) : (
                <Checkout products={cart} />
            )}

            <Footer />
        </div>
    )
}
export default Layout;