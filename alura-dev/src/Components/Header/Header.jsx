//import styles from './Header.module.scss';

import { useState } from 'react'
import './Header.scss';
import logo from '../../Images/Logo.svg'
import searchIcon from '../../Images/search-icon.svg' 
import hamburgerIcon from '../../Images/hamburger-icon.svg' 
import avatarIcon from '../../Images/Avatar.png' 

const Header = () => {

    const inputSearchText = 'Busque por Algo';
    const [inputSearchSate, setInputSearchSate] = useState(inputSearchText)
    const [inputSearchFocusSate, setInputSearchFocusSate] = useState(false)

    const inputSearchChangeHandler = (event) => {
        setInputSearchSate(event.target.value)
        console.log(inputSearchSate)
    }

    const inputSearchFocusHandler = () => { 
        if (inputSearchFocusSate === false){
            setInputSearchSate('');
            setInputSearchFocusSate(true);
        }
    }
    
    const inputSearchBlurHandler = () => { 
        if (inputSearchSate === ''){
            setInputSearchSate(inputSearchText);
            setInputSearchFocusSate(false);
        }
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
                    onFocus={inputSearchFocusHandler}
                    onBlur={inputSearchBlurHandler}
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