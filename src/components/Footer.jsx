import './css/Footer.css'
function Footer(){
    return (
        <div className="footer">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Welcome to ShopSphere, your one-stop destination for all things shopping! At ShopSphere, we believe in creating a seamless and enjoyable shopping experience for our customers.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@shopsphere.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="fa-brands fa-facebook" style={{ marginRight: '10px' }}></i>
            <i className="fa-brands fa-twitter" style={{ marginRight: '10px' }}></i>
            <i className="fa-brands fa-instagram" style={{ marginRight: '10px' }}></i>
          </div>
        </div>
        <div className="footer-section">
          <h4>Subscribe</h4>
          <input type="email" placeholder="Enter your email" className="subscribe-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      
    )
}
export default Footer;