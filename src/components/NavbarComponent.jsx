import { useState } from 'react';
import '../styles/components/Navbar.css';

export const NavbarComponent = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen( !isOpen );
  };
  return (
    <div className='navbar'>
        <div className="nav-logo">CODE.APP</div>
        <div className={`nav-items ${isOpen && 'open'}`}>
            <a href="./" className="nav-item active">Home</a>
            <a href="./" className="nav-item">About Us</a>
            <a href="./" className="nav-item">Contact Us</a>
            <a href="./" className="nav-item">FAQs</a>
        </div>
        <div className={`nav-toggle ${isOpen && 'open'}`} onClick={ handleClick }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}
