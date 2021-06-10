import CodeCard from "./CodeCard";
import "./CodeCardList.scss";

const CodeCardList = () => {
    return(
        <ul className="code-card-list">
            <li className="code-card-list__item">
                <CodeCard />
            </li>
            <li className="code-card-list__item">
                  <CodeCard />
            </li>
            <li className="code-card-list__item">
                <CodeCard />
            </li>
            <li className="code-card-list__item">
                <CodeCard />
            </li>
        </ul>
    )
}

export default CodeCardList;