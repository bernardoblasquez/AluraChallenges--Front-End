import { useState } from 'react'

import './CodeEditor.scss'

const CodeEditor = (props) => {

    const codeEditorText = 'Digite ou cole seu código aqui';
    const [codeEditorState, setCodeEditorSate] = useState(codeEditorText);
    const [codeEditorFocusState, setCodeEditorFocusSate] = useState(false);

    const codeEditorChangeHandler = (event) => {
        let codeEditorContent = event.target.value;

        setCodeEditorSate(codeEditorContent)
    }

    const codeEditorFocusHandler = () => {
        if (codeEditorFocusState === false){
            setCodeEditorSate('')
            setCodeEditorFocusSate(true)
        }
    }

    const codEditorBlurHandler = () => {
        if (codeEditorState === ''){
            setCodeEditorSate(codeEditorText)
            setCodeEditorFocusSate(false)
        }
    }


    console.log(codeEditorState)

    return(
        <form >
            <div className="code-editor">
                <div className="code-editor__window">
                    <textarea 
                        value={codeEditorState}
                        onChange={codeEditorChangeHandler}
                        onFocus={codeEditorFocusHandler}
                        onBlur={codEditorBlurHandler}
                        className="code-editor__text-editor"
                    />
                </div>
            </div>
            
            <button className="code-editor__highlight-button">
                    Visualizar com o highlight
            </button>
        </form>

    )
}

export default CodeEditor; 