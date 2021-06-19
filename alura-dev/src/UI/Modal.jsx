import ReactDOM  from 'react-dom'; 
import './Modal.scss';

const Backdrop = (props) => {
    return(
        <div className="modal-backdrop"></div>
    )
}

const ModalOverlay = (props) => {
    return(
        <div className="modal">
            <div className="modal__content">
                {props.childre}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal