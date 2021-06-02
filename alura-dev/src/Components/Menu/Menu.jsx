import MenuIcon from './MenuIcon';
import './menu.scss';
import codeIcon from '../../Images/code-icon.svg';
import communityIcon from '../../Images/community-icon.svg';

const menu = (props) => {

    return(
        
        <nav className="menu">
            <ul className='menu__list'>
                <li className="menu__item">
                    <a href="xvdvv" className="menu__link">
                        <MenuIcon 
                            activeLink={true}
                            icon={codeIcon}
                            href="sdfsdsdfs"
                            text='Editor de código'
                            alt='texto'
                        />
                    </a>
                </li>
                <li className="menu__item">
                    <a href="sdads" className="menu__link">
                        <MenuIcon
                            activeLink={false}
                            icon={communityIcon}
                            href="sdfsdsdfs"
                            text='Comunidade'
                            alt='texto'
                        />
                    </a>
                </li>
            </ul>
        </nav>
        
    )
}

export default menu