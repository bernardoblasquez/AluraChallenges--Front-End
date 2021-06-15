
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import IconLike from './Icons/IconLike';
import IconComments from './Icons/IconComments';
import IconAvatar from './Icons/IconAvatar';
import './CodeCard.scss';

const CodeCard = (props) => {

    const code = "function code() { \n return b \n}" 

    return(
        <div className="code-card">
            <div className={`code-editor--card ${props.bgColor}`}>
                <div className="code-editor__window">
                    <SyntaxHighlighter 
                        className="code-editor__text-editor" 
                        language={props.language} 
                        style={a11yDark}
                        showLineNumbers
                        wrapLongLines>
                        
                        {props.children}

                    </SyntaxHighlighter>
                </div>
            </div>
            
            <div className="code-card__info">
                <h3 className="code-card__title">
                    {props.title}
                </h3>
                <p className="code-card__description">
                    {props.description}
                </p>

                <footer className="code-card__footer">
                    <IconComments counter={props.totalOfComments} />
                    <IconLike counter={props.totalOfLikes}/>
                    <IconAvatar userName="Harry"/>
                </footer>
            </div>
                
        </div>
    )
}

export default CodeCard;