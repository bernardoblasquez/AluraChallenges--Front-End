import CodeCard from "./CodeCard";
import "./CodeCardList.scss";


const CodeCardList = (props) => {

    let listOfCodes = '';

    if (props.listOfCodes.length === 0){
        listOfCodes = <p>não há dados</p>
    } 
    else{
        listOfCodes = props.listOfCodes.map((code, index) => {
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
        })
    }


    return(
        
        <ul className="code-card-list">
            {listOfCodes}
        </ul>
        
    )
}

export default CodeCardList;