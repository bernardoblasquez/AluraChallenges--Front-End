import Menu from '../Menu/Menu';
import FormProject from '../Forms/FormProject';
import FormSelectLanguage from '../Forms/FormSelectLanguage';
import FormSelectEditorColor from '../Forms/FormSelectEditorColor';
import CodeEditor from '../CodeEditor/CodeEditor';

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
                <CodeEditor />
            </section>  

            <form className="grid-column__right-menu">
                <fieldset>
                    <legend className="grid-column__title">
                        Seu Projeto
                    </legend>
                    <FormProject />
                </fieldset>

                <fieldset>
                    <legend className="grid-column__title">
                        Personalização
                    </legend>
                    <div className="form-flex-fields">
                        <FormSelectLanguage />
                        <FormSelectEditorColor />
                    </div>
                </fieldset>

                <button>Salvar Projeto</button>
            </form>
        </main>
    )
}

export default EditorPage