import Menu from '../Menu/Menu'
import './PagesGrid.scss'

const EditorPage = () =>{
    return(
        <main>
            <section className="grid-column__menu">
                <h2 className="grid-column__title">
                    Menu
                </h2>
                <Menu />
            </section>

            <section className="grid-column__editor">
                <div className="editor">
                    Editor
                </div>
            </section>

            <section className="grid-column__right-menu">
                <h2 className="grid-column__title">
                    Menu
                </h2>
                <Menu />
            </section>
        </main>
    )
}

export default EditorPage