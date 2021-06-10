import { useState, useRef } from 'react'
import './Icons.scss'


const IconLike = (props) => {

    const [toggleLike, setToggleLike] = useState(false)


    const favoriteClickHandler = () =>{
        setToggleLike(!toggleLike)
    }

    

    return(
        <div className="icon-box" 
            onClick={favoriteClickHandler}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path className={toggleLike? "icon-box__figure-red": "icon-box__figure-white"}
                    d="M20.0587 4.44659C17.9181 2.6224 14.7346 2.95052 12.7698 4.97783L12.0003 5.77078L11.2308 4.97783C9.26987 2.95052 6.08243 2.6224 3.94185 4.44659C1.48877 6.5403 1.35987 10.298 3.55514 12.5675L11.1136 20.3721C11.6019 20.876 12.3948 20.876 12.8831 20.3721L20.4415 12.5675C22.6407 10.298 22.5118 6.5403 20.0587 4.44659Z" fill="white"/>
            </svg>
            <span className="icon-box__counter">{toggleLike? parseInt(props.counter)+1 : props.counter}</span>
        </div>
    )
}

export default  IconLike