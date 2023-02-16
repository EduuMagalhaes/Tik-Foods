import React from 'react';
import './Header.css'
import facebook from '../assets/facebook.svg'
import whatsapp from '../assets/whatsapp.svg'
import tikFoods from '../assets/tikFoods.png'

function Header() {
  return (
    <header>
      <div>
      <img src={tikFoods} />
      </div>
      <div>
        <img className='icon' src={facebook} />
        <img className='icon' src={whatsapp} />
      </div>    
    </header>
  );
}

export default Header;
