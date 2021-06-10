
import { useState } from 'react';
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
            <div className="code-editor--card">
                <div className="code-editor__window">
                    <SyntaxHighlighter 
                        className="code-editor__text-editor" 
                        language="javascript" 
                        style={a11yDark}
                        showLineNumbers
                        wrapLongLines>
                        
                        {code}

                    </SyntaxHighlighter>
                </div>
            </div>
            
            <div className="code-card__info">
                <h3 className="code-card__title">
                    Título do projeto
                </h3>
                <p className="code-card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique tristique pharetra. 
                </p>

                <footer className="code-card__footer">
                    <IconComments counter="40" />
                    <IconLike counter="90"/>
                    <IconAvatar userName="Harry"/>
                </footer>
            </div>
                
        </div>
    )
}

export default CodeCard;