//import styles from './Header.module.scss';
import MenuDropdown from '../Menu/MenuDropdown'
import HeaderSearch from './HeaderSearch';
import './Header.scss';
import logo from '../../Images/Logo.svg'
import avatarIcon from '../../Images/Avatar.png' 

const Header = () => {

    return(
        <header className='header-app'>
            
            <div className="header-logo"> 
                <img src={logo} alt="Logo da Alura Dev" />  
            </div>
            
            <HeaderSearch defaultTxt='Busque por Algo'/>

            <MenuDropdown />

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