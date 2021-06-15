import Menu from '../Components/Menu/Menu';
import FormProject from '../Components/Forms/FormProject';
import FormFieldLanguageSelector from '../Components/Forms/FormFieldLanguageSelector';
import FormFieldColorSelector from '../Components/Forms/FormFieldColorSelector';
import CodeEditor from '../Components/CodeEditor/CodeEditor'
import { useState } from 'react'

import './PagesGrid.scss'

const EditorPage = (props) =>{


    const [selectedLanguage, setSelectedLanguage] = useState('javascript')
    const [selectedColor, setSelectedColor] = useState('bg-color-blue')
    const [projectDataName, setProjectDataName] = useState('')
    const [projectDataDesc, setProjectDataDesc] = useState('')
    const [projectCodeText, setProjectCodeText] = useState('')

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

    const projectCodeTextHandler = (projectCodeText) => {
        setProjectCodeText(projectCodeText) 
    }

    const onSaveDataHandler = (event) =>{
        event.preventDefault();

        const formData = {
            title: projectDataName,
            description: projectDataDesc,
            language: selectedLanguage,
            bgColorClass: selectedColor,
            totalOfComments: 0,
            totalOfLikes: 0,
            codeText: projectCodeText
        }

        console.log(formData);
        props.onSaveNewCode(formData)

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
                <CodeEditor onChangeCodeText={projectCodeTextHandler}  language={selectedLanguage} bgColor={selectedColor}/>
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