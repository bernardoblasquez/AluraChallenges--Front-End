import Menu from '../Menu/Menu';
import FormProject from '../Forms/FormProject';
import FormFieldLanguageSelector from '../Forms/FormFieldLanguageSelector';
import FormFieldColorSelector from '../Forms/FormFieldColorSelector';
import CodeEditor from '../CodeEditor/CodeEditor';
import { useState } from 'react'

import './PagesGrid.scss'

const EditorPage = () =>{


    const [selectedLanguage, setSelectedLanguage] = useState('javascript')
    const [selectedColor, setSelectedColor] = useState('bg-color-blue')
    const [projectDataName, setProjectDataName] = useState('')
    const [projectDataDesc, setProjectDataDesc] = useState('')

    const selectedLanguageHandler = (language) => {
        setSelectedLanguage(language)
    }

    const selectedColorHandler = (color) => {
        setSelectedColor(color)
    }

    const projectNameHandler = (projectName) => {
        setProjectDataName(projectName)
    }

    const projectDescHandler = (projectDesc) => {
        setProjectDataDesc(projectDesc)
        
    }

    const onSaveDataHandler = (event) =>{
        event.preventDefault();

        const formData = {
            name: projectDataName,
            description: projectDataDesc,
            language: selectedLanguage,
            bdColorClass: selectedColor,
        }

        console.log(formData)

    }

    return(
        
        <form action="" className="grid-column">
            <section className="grid-column__menu">
                <h2 className="grid-column__title">
                    Menu
                </h2>
                <Menu />
            </section>

            <section className="grid-column__editor">
                <CodeEditor  language={selectedLanguage} bgColor={selectedColor}/>
            </section>  

            <div className="grid-column__right-menu">
                <fieldset>
                    <legend className="grid-column__title">
                        Seu Projeto
                    </legend>

                    <FormProject onChangeProjectName={projectNameHandler} onChangeProjectDesc={projectDescHandler}/>
                </fieldset>

                <fieldset>
                    <legend className="grid-column__title">
                        Personalização
                    </legend>
                    <div className="form-flex-fields">
                        <FormFieldLanguageSelector onSelectLanguage={selectedLanguageHandler}/>
                        <FormFieldColorSelector onSelectColorHandler={selectedColorHandler} />
                    </div>
                </fieldset>

                <button onClick={onSaveDataHandler} className="form-button">Salvar Projeto</button>
            </div>
        </form>
    )
}

export default EditorPage