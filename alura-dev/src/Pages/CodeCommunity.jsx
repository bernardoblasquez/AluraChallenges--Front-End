
import Menu from '../Components/Menu/Menu';
import CodeCardList from '../Components/CodeEditor/CodeCardList';

import './PagesGrid.scss'

const CommunityPage = (props) =>{
    return(
        <div className="grid-column">
            <section className="grid-column__menu">
                <h2 className="grid-column__title">
                    Menu
                </h2>
                <Menu />
            </section>

            <div className="grid-column__community">
                <CodeCardList listOfCodes={props.listOfCodes} />
            </div>
        </div>
    )
}

export default CommunityPage

