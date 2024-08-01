
import './css/Cart.css'
function Cart({ products, removeFromCart, addToCart ,goToPage ,setCart}) {
    
    let total = products.reduce((acc, product) => (
        acc + product.qtySelected * product.price
    ), 0);
    return (
        <>
            <center><h1 className='cart-title'>Cart</h1></center>
            {products.length===0? <center> <h1>Cart is Empty <i class="fa-regular fa-face-frown"></i></h1></center>:''}
            <div style={{ display: products.length > 0 ? 'flex' : 'none', justifyContent: 'space-between' }}>
                <div className='total-amt'>Total : &#8377; {total}</div>
                <div>
                <button id='checkout' onClick={()=>{goToPage('checkout'); setTimeout(()=>{setCart([])},30000)  }}>Checkout</button>
                </div>
            </div>

            <div className="cart-card-container">

                {products.map(product => (
                    <div class="cart-card">
                        <div>
                            <img src={product.image} class="cart-cardImg" alt={product.name} /></div>
                        <div className='cart-card-info'>
                            <div className="left">
                            
                            <div className="card-title">{product.name}</div>
                            <div className="card-info">&#8377; {product.price}</div>
                            <div className='qtyOptions'>
                                <i onClick={() => { removeFromCart(product) }} class="fa-solid fa-circle-minus"></i>
                                <button id="qtySelected" >{product.qtySelected}</button>
                                <i onClick={() => { addToCart(product) }} class="fa-solid fa-circle-plus"></i>
                            </div>
                            <div><button onClick={() => { removeFromCart(product, product.qtySelected) }} id="remove">Remove</button></div>
                            </div> 
                            {/* left div ends  */}
                            <div className="right">
                                Total: &#8377;{product.qtySelected*product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Cart;