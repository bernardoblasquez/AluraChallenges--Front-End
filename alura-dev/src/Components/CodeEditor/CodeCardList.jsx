import CodeCard from "./CodeCard";
import "./CodeCardList.scss";


const CodeCardList = (props) => {

    //console.log(JSON.stringify({codeText: props.listOfCodes[3].codeText}));

    return(
        
        <ul className="code-card-list">
            {props.listOfCodes.map((code, index) => {
                return(
                    <li key={index} className="code-card-list__item">
                        <CodeCard  title={code.title}
                            description={code.description}
                            language={code.language} 
                            bgColor={code.bgColorClass}
                            totalOfComments={code.totalOfComments}
                            totalOfLikes={code.totalOfLikes}
                            className={index}>
                                
                            {code.codeText}
                    </CodeCard>
                </li>
                )
            })}
        </ul>
        
    )
}

export default CodeCardList;