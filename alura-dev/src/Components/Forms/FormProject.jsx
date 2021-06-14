import { useState } from 'react'
import './Form.scss';


const FormProject = (props) => {

    const projectNameText = 'Nome do seu projeto';
    const projectDescriptionText = 'Descrição do seu projeto';

    const [projectNameState, setProjectNameState] = useState(projectNameText);
    const [projectNameFocusState, setProjectNameFocusState] = useState(false);
    const [projectDescriptionState, setProjectDescriptionState] = useState(projectDescriptionText);
    const [projectDescriptionFocusState, setProjectDescriptionFocusState] = useState(false);
   

    const projectNameChangeHandler = (event) =>{
        let projectName = event.target.value;
        setProjectNameState(projectName)
        props.onChangeProjectName(projectName)
    }

    const projectNameFocusHandler = () =>{
        if (projectNameFocusState === false){
            setProjectNameState('')
            setProjectNameFocusState(true)
        }
    }

    const projectNameBlurHandler = () =>{
        if (projectNameState === ''){
            setProjectNameState(projectNameText)
            setProjectNameFocusState(false)
        }
    }

    const projectDescriptionChangeHandler = (event) =>{
        let projectDescription = event.target.value;
        setProjectDescriptionState(projectDescription)
        props.onChangeProjectDesc(projectDescription)
    }

    const projectDescriptionFocusHandler = (event) =>{
        if (projectDescriptionFocusState === false){
            setProjectDescriptionState('')
            setProjectDescriptionFocusState(true)
        }
    }

    const projectDescriptionBlurHandler = () =>{
        if (projectDescriptionState === ''){
            setProjectDescriptionState(projectDescriptionText)
            setProjectDescriptionFocusState(false)
        }
    }


    return(
        <div>
            <input 
                className="form-input"
                value={projectNameState}
                onChange={projectNameChangeHandler}
                onFocus={projectNameFocusHandler}
                onBlur={projectNameBlurHandler}
                type="text" />
            <textarea 
                className="form-textarea" 
                value={projectDescriptionState}
                onChange={projectDescriptionChangeHandler}
                onFocus={projectDescriptionFocusHandler}
                onBlur={projectDescriptionBlurHandler}
                name="" 
                id="" 
            />
        </div> 
    )
}

export default FormProject; 