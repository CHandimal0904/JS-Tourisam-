import React, { useEffect, useState } from 'react';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import { Button } from '../Buttons/Button';


export const NavBar = () => {
  const[click, setclick] = useState(false);
  const[button, setButon] = useState(true);
  const handleOnClick =()=> setclick(!click);
  const closeMobileMenu=()=>setclick(false);

  const showButton = ()=>{
    if(window.innerWidth <= 960){
      setButon(false);
    }else{
      setButon(true);
    }
  };

  useEffect(()=>{
    showButton();
  },[]);

  window.addEventListener('resize', showButton)
    return (
    <div>
      <nav className='NavBar'>
            <div className="container">
              <h1 className='navbar-logo'>GuidBook <i class='fab fa-typo3' /> </h1>
              <div className='menu-icon' onClick={handleOnClick}>
              <i className={click ? 'fas fa-times' :'fas fa-bars'}/>
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className='Nav-Item'>
              <a to='/' className='Nav-Links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>

            <li className='Nav-Item'>
              <a to='/visits' className='Nav-Links' onClick={closeMobileMenu}>
                visits
              </a>
            </li>

            <li className='Nav-Item'>
              <a to='/services' className='Nav-Links' onClick={closeMobileMenu}>
                Services
              </a>
            </li>

            <li>
              <a  href='/sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </a>
            </li>

              </ul>
              {button && <Button buttonStyle={'btn--outLine'}>SignUp</Button> }
            </div>

      </nav>

    </div>
  )
}
export default NavBar;
