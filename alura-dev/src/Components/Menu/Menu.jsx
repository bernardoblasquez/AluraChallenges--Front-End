import MenuLink from './MenuLink';
import './menu.scss';
import codeIcon from '../../Images/code-icon.svg';
import communityIcon from '../../Images/community-icon.svg';

const menu = (props) => {

    return(
        
        <nav className="menu">
            <ul className='menu__list'>
                <li className="menu__item">
                    <MenuLink 
                        to="/editor"
                        icon={codeIcon}
                        href="sdfsdsdfs"
                        text='Editor de código'
                        alt='texto' />
                </li>
                <li className="menu__item">
                    <MenuLink
                        to="/comunidade"
                        icon={communityIcon}
                        href="sdfsdsdfs"
                        text='Comunidade'
                        alt='texto'
                    />
                </li>
            </ul>
        </nav>
        
    )
}

export default menu