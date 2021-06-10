import './Icons.scss'

const IconComments = (props) => {
    return(
        <div className="icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.25C6.47656 3.25 2 6.88672 2 11.375C2 13.3125 2.83594 15.0859 4.22656 16.4805C3.73828 18.4492 2.10547 20.2031 2.08594 20.2227C2 20.3125 1.97656 20.4453 2.02734 20.5625C2.07812 20.6797 2.1875 20.75 2.3125 20.75C4.90234 20.75 6.84375 19.5078 7.80469 18.7422C9.08203 19.2227 10.5 19.5 12 19.5C17.5234 19.5 22 15.8633 22 11.375C22 6.88672 17.5234 3.25 12 3.25Z" fill="white"/>
            </svg>
            <span className="icon-box__counter">{props.counter}</span>
        </div>
    )
}

export default  IconComments