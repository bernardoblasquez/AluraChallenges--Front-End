import Menu from '../Menu/Menu';
import FormProject from '../Forms/FormProject';
import FormSelectLanguage from '../Forms/FormSelectLanguage';
import FormSelectEditorColor from '../Forms/FormSelectEditorColor';
import CodeEditor from '../CodeEditor/CodeEditor';
import { useState } from 'react'

import './PagesGrid.scss'

const EditorPage = () =>{


    const [selectedLanguage, setSelectedLanguage] = useState('javascript')

    const selectedLanguageHandler = (language) => {
        console.log(`EditorPage ${language}`)

        setSelectedLanguage(language)
    }

    return(
        <main>
            <section className="grid-column__menu">
                <h2 className="grid-column__title">
                    Menu
                </h2>
                <Menu />
            </section>

            <section className="grid-column__editor">
                <CodeEditor  language={selectedLanguage} />
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
                        <FormSelectLanguage onSelectLanguage={selectedLanguageHandler}/>
                        <FormSelectEditorColor />
                    </div>
                </fieldset>

                <button>Salvar Projeto</button>
            </form>
        </main>
    )
}

export default EditorPage