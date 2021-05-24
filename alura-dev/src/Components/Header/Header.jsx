//import styles from './Header.module.scss';

import { useState } from 'react'
import './Header.scss';
import logo from '../../Images/Logo.svg'
import searchIcon from '../../Images/search-icon.svg' 
import hamburgerIcon from '../../Images/hamburger-icon.svg' 
import avatarIcon from '../../Images/Avatar.png' 

const Header = () => {

    const [inputSearchSate, setInputSearchSate] = useState('Busque por Algo')

    const inputSearchChangeHandler = (event) => {
        setInputSearchSate(event.target.value)
        console.log(inputSearchSate)
    }

    return(
        <header className='header-app'>
            <div className="header-logo">
                <img src={logo} alt="Logo da Alura Dev" />
            </div>
            
            
            <form action="" className="header-form" >
                <input type="text"  
                    className="header-form__search-input" 
                    value={inputSearchSate}
                    onChange={inputSearchChangeHandler}
                />

                <img src={searchIcon}
                    className="header-form__search-icon" 
                    alt="" 
                />
            </form>

            <div className="header-menu">
                <img src={hamburgerIcon} 
                    className="header-menu__icon"
                    alt="" />
            </div>  

            <div className="header-user">
                <img src={avatarIcon} 
                    className="header-user__avatar"
                    alt="" />
                <p>Harrys</p>
            </div>


        </header>
    )
}

export default Header;