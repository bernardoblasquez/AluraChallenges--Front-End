import { NavLink } from 'react-router-dom'
import './MenuLink.scss'


const MenuLink = (props) => {
    
    return(
        <NavLink activeClassName="active" to={props.to} className='menu-link' >
            <span className="menu-link__box-icon">
                <img 
                    className='menu-icon__icon'
                    src={props.icon} 
                    alt={props.alt} />
            </span>
            
            {props.text}
        </NavLink>
    )

}

export default MenuLink