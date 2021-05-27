import MenuIcon from './MenuIcon';
import './menu.scss';
import codeIcon from '../../Images/code-icon.svg';
import communityIcon from '../../Images/community-icon.svg';

const menu = (props) => {

    return(
        <>
            <h3 className="menu__title">menu</h3>
            <nav className="menu">
                <ul className='menu__list'>
                    <li className="menu__item">
                        <a href="xvdvv">
                            <MenuIcon 
                                icon={codeIcon}
                                href="sdfsdsdfs"
                                text='Editor de código'
                                alt='texto'
                            />
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="sdads">
                            <MenuIcon
                                icon={communityIcon}
                                href="sdfsdsdfs"
                                text='Comunidade'
                                alt='texto'
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default menu