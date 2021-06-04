import './MenuIcon.scss'

const MenuLink = (props) => {

    let activeClass = '';
    
    if(props.activeLink === true) {
        activeClass="active"
    }
    
    
    return(
        <span className={`menu-icon ${activeClass}`}>
            <span className="menu-icon__box-img">
                <img 
                    className='menu-icon__img'
                    src={props.icon} 
                    alt={props.alt} />
            </span>
            
            {props.text}
        </span>
    )

}

export default MenuLink