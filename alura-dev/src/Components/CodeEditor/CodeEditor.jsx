import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import Highlight from 'react-highlight';
//import '../../../node_modules/highlight.js/styles/dracula.css';

import './CodeEditor.scss'

const CodeEditor = (props) => {

    const codeEditorText = 'Digite ou cole seu código aqui';
    const [codeEditorState, setCodeEditorSate] = useState('Digite ou cole seu código aqui');
    const [highLightCode, setHighLightCode] = useState(false)
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

    const SyntaxHighlighterClickHandler = () => {
        setHighLightCode(false)
    }

    const highlighterCodeHandler = (event) => {
        event.preventDefault()
        setHighLightCode(true)
    }

   // console.log(codeEditorState)

    return(
        <>
            <div className="code-editor">
                <div className="code-editor__window">

                    {
                        highLightCode
                        ?   <SyntaxHighlighter 
                                onClick={SyntaxHighlighterClickHandler}
                                className="code-editor__text-editor" 
                                language={props.language} 
                                style={a11yDark}
                                showLineNumbers
                                wrapLongLines>

                                {codeEditorState}
                            </SyntaxHighlighter>
                        
                        :  <textarea 
                                value={codeEditorState}
                                onChange={codeEditorChangeHandler}
                                onFocus={codeEditorFocusHandler}
                                onBlur={codEditorBlurHandler}
                                className="code-editor__text-editor"
                            />
                    }
                    
                </div>
 

                
            </div>
            
            <button className="code-editor__highlight-button"
                onClick={highlighterCodeHandler}>
                    Visualizar com o highlight
            </button>
        </>

    )
}

export default CodeEditor; 