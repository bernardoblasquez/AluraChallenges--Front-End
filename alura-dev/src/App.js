import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react'
import Header from './Components/Header/Header'
import CodeEditorForm from './Pages/CodeEditorForm';
import CodeCommunity from './Pages/CodeCommunity';
import Page404 from './Pages/Page404';
import CodeView from './Pages/CodeView';

import './App.scss';

const CODES = [
  {
      title: "Um código Javascript",
      description: "Um exemplo de código utilizando a linguagem Javascript",
      language: "javascript",
      bgColorClass: "bg-color-blue",
      totalOfComments: 31,
      totalOfLikes: 9,
      codeText: "    class MyClass {\n          public static myValue: string;\n          constructor(init: string) {\n          this.myValue = init;\n          }\n      }\n      import fs = require(\"fs\");\n      module MyModule {\n          export interface MyInterface extends Other {\n          myProperty: any;\n          }\n      }\n      declare magicNumber number;\n      myArray.forEach(() => { }); \n                  "
  },
  {
      title: "Um código Json",
      description: "Um exemplo de código utilizando o JSON",
      language: "json",
      bgColorClass: "bg-color-green",
      totalOfComments: 18,
      totalOfLikes: 40,
      codeText: "     [\n          {\n              \"title\": \"apples\",\n              \"count\": [12000, 20000],\n              \"description\": {\"text\": \"...\", \"sensitive\": false}\n          },\n          {\n              \"title\": \"oranges\",\n              \"count\": [17500, null],\n              \"description\": {\"text\": \"...\", \"sensitive\": false}\n          }\n      ]"
  },
  {
      title: "CSS",
      description: "Estilo aleatório para teste",
      language: "css",
      bgColorClass: "bg-color-pink",
      totalOfComments: 5,
      totalOfLikes: 3,
      codeText: "      @font-face {\n          font-family: Chunkfive; src: url('Chunkfive.otf');\n      }\n  \n      body, .usertext {\n          color: #F0F0F0; background: #600;\n          font-family: Chunkfive, sans;\n          --heading-1: 30px/32px Helvetica, sans-serif;\n      }\n  \n      @import url(print.css);\n      @media print {\n          a[href^=http]::after {\n              content: attr(href)\n      }"
  },
  {
      title: "HTML5",
      description: "Estruturando uma código de forma semantica",
      language: "html",
      bgColorClass: "bg-color-orange",
      totalOfComments: 20,
      totalOfLikes: 10,
      codeText: "     \n      <!DOCTYPE html>\n      <title>Title</title>\n      \n      <style>body {width: 500px;}</style>\n      \n      <script type=\"application/javascript\">\n        function $init() {return true;}\n      </script>\n      \n      <body>\n        <p checked class=\"title\" id='title'>Title</p>\n        <!-- here goes the rest of the page -->\n      </body>"
  },

];

function App() {

  const [listOfCodes, setListOfCode] = useState(CODES);

  const updateListOfCodesHandler = (newCode) => {

    setListOfCode((prevListOfCodes) => {
      return [...prevListOfCodes, newCode]
    })
  }

  return (
    <>
      <Header />
      <main>

        <Switch>
          <Route exact path="/">
            <Redirect to="/editor" />
          </Route>

          <Route path="/editor">
            <CodeEditorForm onSaveNewCode={updateListOfCodesHandler} />
          </Route>

          <Route exact path="/comunidade">
            <CodeCommunity listOfCodes={listOfCodes} />
          </Route>

          <Route path="/comunidade/:codeId">
            <CodeView />
          </Route>

          <Route>
            <Page404 />
          </Route>
        </Switch>

      </main>
    </>
  );
}

export default App;
