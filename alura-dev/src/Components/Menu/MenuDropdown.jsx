import { useState } from "react";
import Menu from './Menu'
import hamburgerIcon from '../../Images/hamburger-icon.svg'
import closeIcon from '../../Images/close-icon.svg'
import  './MenuDropdown.scss'


const Navbar = (props) =>{
    
    const [open, setOpen] = useState(false);
    
    const dropdownClickHandler = (event) => {
        event.preventDefault()
        setOpen(!open)
    }

    let dropdownBox = '';

    if (open){
        dropdownBox = (
            <div className="dropdown__box">
                <Menu />
            </div>
        );
    }    
    else  {
        dropdownBox = '';
    }

    return(
        <div className="menu-dropdown">
            <button className="menu-dropdown__button"
                onClick={dropdownClickHandler}>
                {   
                    open 
                    ? <img src={closeIcon} alt="" />
                    : <img src={hamburgerIcon} alt="" />
                }
            </button>
            {dropdownBox}
        </div> 
    );
}

export default Navbar;