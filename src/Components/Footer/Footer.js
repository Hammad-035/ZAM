import React from 'react'
import './Footer.css';
import { Link } from'react-router-dom';
const Footer = () => {
  return (
    <div className='footer-container'>
      
      <footer class="footer">
        <div className='left-container'>
          <ul>
          <li><Link to='/contact-us'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='right-container'>
        Copyright &copy;2023<Link to='https://zadeashiqanemustafa.com/'>Zade Ashiqane Mustafa</Link> All rights reserved. Developed by <Link to='https://coralr.com/'>Coral reef</Link>
        </div>
       </footer>
  
    
    </div>
  )
}

export default Footer