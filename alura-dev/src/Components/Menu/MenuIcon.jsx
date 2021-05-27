import './MenuIcon.scss'

const MenuLink = (props) => {
    
    return(
        <span className="menu-icon active">
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