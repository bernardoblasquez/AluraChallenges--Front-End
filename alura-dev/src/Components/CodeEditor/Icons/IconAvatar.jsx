import './Icons.scss'
import AvatarMini from '../../../Images/avatar-mini.png'

const IconAvatar = (props) => {
    return(
        <div className="icon-box--avatar">
            <img src={AvatarMini} alt="icone de usuário" />
            <span className="icon-box__user-name">{props.userName}</span>
        </div>
    )
}

export default IconAvatar