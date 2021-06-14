import { useState, useRef } from 'react'
import './FormFieldColorSelector.scss'

const FormFieldColorSelector = (props) => {

    const [open, setOpen] = useState(false);
    const [clickedColor, setClickedColor] = useState('bg-color-blue')
    
    const dropdownColorHandler = (event) => {
        event.preventDefault()
        setOpen(!open)
    }

    const selectedColorHandler = (event) => {
        let selectedColor = event.target.className.split(' ')[1]
        console.log(selectedColor);
        setClickedColor(selectedColor);
        props.onSelectColorHandler(selectedColor)
    }

    //console.log(selectedColor)

    let dropdownBox = '';

    if (open){
        dropdownBox = (
            <div onClick={selectedColorHandler} 
                className="dropdown-color__box">
                <div className="dropdown-color__item bg-color-blue" />
                <div className="dropdown-color__item bg-color-green" />
                <div className="dropdown-color__item bg-color-orange" />
                <div className="dropdown-color__item bg-color-pink" />
            </div>
        );
    }    
    else  {
        dropdownBox = '';
    }

    return (
        <div className="form-color-selector"
            onClick={dropdownColorHandler}>
            <div className={`form-color-selector__selected-color ${clickedColor}`}></div>
            
            {dropdownBox}
        </div>
    )
}

export default FormFieldColorSelector