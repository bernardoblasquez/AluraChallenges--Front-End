import CodeCard from "./CodeCard";
import "./CodeCardList.scss";

const CodeCardList = (props) => {

    return(
        <ul className="code-card-list">
            <li className="code-card-list__item">
                <CodeCard labguage="javascript" bgColor="bg-color-blue">
                {`
    class MyClass {
        public static myValue: string;
        constructor(init: string) {
        this.myValue = init;
        }
    }
    import fs = require("fs");
    module MyModule {
        export interface MyInterface extends Other {
        myProperty: any;
        }
    }
    declare magicNumber number;
    myArray.forEach(() => { }); 
                ` }
                </CodeCard>
            </li>
            <li className="code-card-list__item">
                <CodeCard labguage="json" bgColor="bg-color-green">
                {`
    [
        {
            "title": "apples",
            "count": [12000, 20000],
            "description": {"text": "...", "sensitive": false}
        },
        {
            "title": "oranges",
            "count": [17500, null],
            "description": {"text": "...", "sensitive": false}
        }
    ]
                ` }
                </CodeCard>
            </li>
            <li className="code-card-list__item">
                <CodeCard labguage="css" bgColor="bg-color-pink">
                {`
    @font-face {
        font-family: Chunkfive; src: url('Chunkfive.otf');
    }

    body, .usertext {
        color: #F0F0F0; background: #600;
        font-family: Chunkfive, sans;
        --heading-1: 30px/32px Helvetica, sans-serif;
    }

    @import url(print.css);
    @media print {
        a[href^=http]::after {
            content: attr(href)
    }
                `}

                </CodeCard>
            </li>
            <li className="code-card-list__item">
                <CodeCard labguage="html" bgColor="bg-color-orange">
                    {`  
    <!DOCTYPE html>
    <title>Title</title>
    
    <style>body {width: 500px;}</style>
    
    <script type="application/javascript">
      function $init() {return true;}
    </script>
    
    <body>
      <p checked class="title" id='title'>Title</p>
      <!-- here goes the rest of the page -->
    </body>
                    `}
                </CodeCard>
            </li>
        </ul>
    )
}

export default CodeCardList;