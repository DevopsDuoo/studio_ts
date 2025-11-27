import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.svg" alt="Studio T|S" className="footer-logo-image" />
            </div>
            <p className="footer-description">
              Transforming visions into architectural masterpieces. We design spaces that inspire and endure.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services#residential">Residential Design</Link></li>
              <li><Link to="/services#commercial">Commercial Architecture</Link></li>
              <li><Link to="/services#interior">Interior Design</Link></li>
              <li><Link to="/services#landscape">Landscape Architecture</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:hello@architectstudio.com">hello@architectstudio.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>123 Design Street<br />Architecture City, AC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Architect Studio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
