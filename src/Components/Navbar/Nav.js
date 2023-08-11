import React , {useState} from 'react'
import './Nav.css';
import {Link , useLocation} from 'react-router-dom'
const Nav = () => {
    const location = useLocation();
    const [activeLink , setActiveLink] = useState(location.pathname)
    const handleLinkClick = (path) => {
        setActiveLink(path)
    }
  return (
    <ul class="Links">
        <li>
            <Link className={activeLink === '/home' ? 'active' : ''} to='/home' onClick={()=>handleLinkClick('/home')}>Home</Link>
        </li>
        <li>
            <Link className={activeLink === '/audioBook' ? 'active' : ''} to='/audioBook' onClick={()=>handleLinkClick('/audioBook')}>Audio Book</Link>
        </li>
        <li>
            <Link className={activeLink === '/bayanaat' ? 'active' : ''} to='/bayanaat' onClick={()=>handleLinkClick('/bayanaat')}>Bayanat</Link>
        </li>
        <li>
            <Link className={activeLink === '/naat' ? 'active' : ''} to="/naat" onClick={()=>handleLinkClick('/naat')}>Naat</Link>
        </li>
        <li>
            <Link className={activeLink === '/contact-us' ? 'active' : ''} to="/contact-us" onClick={()=>handleLinkClick('/contact-us')}>Contact Us</Link>
        </li>
    </ul>
  )
}

export default Nav