import { useState, useRef } from 'react';
import searchIcon from '../../Images/search-icon.svg' 
import closeIcon from '../../Images/close-icon.svg'
import './HeaderSearch.scss'

const HeaderSearch = (props) => {

    const searchInputRef = useRef()
    const [open, setOpen] = useState(false)
    const [inputSearchSate, setInputSearchSate] = useState(props.defaultTxt)
    const [inputSearchFocusSate, setInputSearchFocusSate] = useState(false)

    const inputSearchChangeHandler = (event) => {
        setInputSearchSate(event.target.value)
        console.log(inputSearchSate)
    }

    const inputSearchFocusHandler = () => { 
        if (inputSearchFocusSate === false){
            setInputSearchSate('');
            setInputSearchFocusSate(true);
        }
    }
    
    const inputSearchBlurHandler = () => { 
        if (inputSearchSate === ''){
            setInputSearchSate(props.defaultTxt);
            setInputSearchFocusSate(false);
        }
    }

    const searchButtonClickHandler = (event) => {
        event.preventDefault() 
        console.log(searchInputRef.current) 
        setOpen(!open)
        //props.onClickSearchIcon(!open);
    }

    const toggleActiveClass = ( 
            open 
            ? 'header-search__input active' 
            : 'header-search__input'
    )

    const toggleSearchIcon = (
        open
        ? <img src={closeIcon} className="header-search__icon" alt="" /> 
        : <img src={searchIcon} className="header-search__icon" alt="" /> 
    )

    return(
        <form action="" className="header-search" >
            
            <input type="text"  
                className={toggleActiveClass} 
                value={inputSearchSate}
                onChange={inputSearchChangeHandler}
                onFocus={inputSearchFocusHandler}
                onBlur={inputSearchBlurHandler}
                ref={searchInputRef}
                autoFocus={open}
            />

            <button className="header-search__button"
                onClick={searchButtonClickHandler}>
                {toggleSearchIcon}
            </button>
                
        </form>
    )
}

export default HeaderSearch;