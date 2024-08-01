import './css/Checkout.css'
function Checkout({products}){
    let i=0;
    
    let total = products.reduce((acc, product) => (
        acc + product.qtySelected * product.price
    ), 0);
    return (
        <>
        <center><h1>ShopSphere <br />Invoice No: {Math.floor(1000 + Math.random() * 9000)}</h1></center>
        <div className="checkout" >
            <div className="checkout-product">
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price (&#8377;)</th>
                    </tr>
            {products.map(product=>(
                <tr>
                    <td>{++i}</td>
                    <td>{product.name}</td>
                    <td>{product.qtySelected}</td>
                    <td>{product.qtySelected*product.price}</td>
                </tr>
            ))}
            <tr>
            <th colSpan={3} >Final Amount</th>
            <th >{total}</th>
            </tr>
            </table>
            </div>
        </div>
            </>
    )
}
export default Checkout;