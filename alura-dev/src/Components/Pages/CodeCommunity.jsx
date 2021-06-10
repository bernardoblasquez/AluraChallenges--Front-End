
import Menu from '../Menu/Menu';
import CodeCard from '../CodeEditor/CodeCard';
import CodeCardList from '../CodeEditor/CodeCardList';

import './PagesGrid.scss'

const CommunityPage = () =>{
    return(
        <div className="grid-column">

            <section className="grid-column__menu">
                <h2 className="grid-column__title">
                    Menu
                </h2>
                <Menu />
            </section>

            <div className="grid-column__community">
                <CodeCardList />
            </div>


        </div>
    )
}

export default CommunityPage

