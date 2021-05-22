//import styles from './Header.module.scss';
import './Header.scss';
import logo from '../../Images/Logo.svg'
import searchIcon from '../../Images/search-icon.svg' 
import hamburgerIcon from '../../Images/hamburger-icon.svg' 
import avatarIcon from '../../Images/Avatar.png' 

const Header = () => {
    return(
        <header className='header-app'>
            <div className="header-logo">
                <img src={logo} alt="Logo da Alura Dev" />
            </div>
            
            
            <form action="" className="header-form" >
                <input type="text" value="Busque por algo" className='header-form__search-input' />
                <img src={searchIcon}
                    className="header-form__search-icon" 
                    alt="" />
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