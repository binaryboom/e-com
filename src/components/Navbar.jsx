
import './css/Navbar.css';
import { useState } from 'react';


function Navbar({goToPage,cartQty,searchProduct ,filterByCategory,filterByPrice}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
      searchProduct(searchTerm);
    };

    return (

        <div className="navbar">
            <div className="nav-logo border">
                <div onClick={()=>{goToPage('home');searchProduct('');filterByCategory('none');filterByPrice('none');setSearchTerm('')}} className="logo">
                    <i  className="fa-brands fa-slack" style={{ color: '#f59b25' }}></i>
                   <div className='ecom-title'> ShopSphere</div>
                </div>
            </div>

            <div className="nav-search">
                <input type="text" placeholder="Search Items" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <i onClick={()=>{handleSearchClick(); goToPage('home'); }} className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="nav-cart">
                <i onClick={()=>{goToPage('cart')}} className="fa-solid fa-cart-shopping"></i> <sup>{cartQty}</sup>

            </div>
        </div>
    );
}

export default Navbar;
