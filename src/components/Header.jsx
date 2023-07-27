import logo from '../assets/Img/icones/logo-white.png'
import '../assets/Css/header.css'
import { useState } from 'react';

import cardapio from '../assets/Img/icones/cardapio.png'

function Header() {
  const [menuStatus, setMenuStatus] = useState("menu-dropdown disable")
  const [isMenuClicked, setIsMenuCliked] = useState(false)

  const openMenu = () => {
    !isMenuClicked ? setMenuStatus("menu-dropdown open") : setMenuStatus("menu-dropdown disable")
    setIsMenuCliked(!isMenuClicked)
  }

  return (
    <>
      <header>
          <img id='logo' src={logo} alt="logo" width={50}/>
        <nav className='menu-geral'>
          <ul className='menu'>
            <li id='cardapio' onClick={openMenu}><img src={cardapio} alt="" /></li>
            <div className={menuStatus}>
              <div className='options-cardapio'>
                <h2>Cardapio</h2>
                <ul className='cardapio-dropdown'>
                  <li>Hot-roll</li>
                  <li>Temaki</li>
                  <li>Sashimi</li>
                  <li>Yakisoba</li>
                </ul>
              </div>
            </div>
            <li>Contato</li>
            <li>Carrinho</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header