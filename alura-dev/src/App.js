import { Route, Switch, Redirect } from 'react-router-dom';
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
      bgColor: "bg-color-blue",
      totalOfComments: 31,
      totalOfLikes: 9,
      codeText:`    class MyClass {
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
                  `
  },
  {
      title: "Um código Json",
      description: "Um exemplo de código utilizando o JSON",
      language: "json",
      bgColor: "bg-color-green",
      totalOfComments: 18,
      totalOfLikes: 40,
      codeText:`     [
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
      ]`
  },
  {
      title: "CSS",
      description: "Estilo aleatório para teste",
      language: "css",
      bgColor: "bg-color-pink",
      totalOfComments: 5,
      totalOfLikes: 3,
      codeText:`      @font-face {
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
      }`
  },
  {
      title: "HTML5",
      description: "Estruturando uma código de forma semantica",
      language: "html",
      bgColor: "bg-color-orange",
      totalOfComments: 20,
      totalOfLikes: 10,
      codeText:`     
      <!DOCTYPE html>
      <title>Title</title>
      
      <style>body {width: 500px;}</style>
      
      <script type="application/javascript">
        function $init() {return true;}
      </script>
      
      <body>
        <p checked class="title" id='title'>Title</p>
        <!-- here goes the rest of the page -->
      </body>`
  },

];

function App() {
  return (
    <>
      <Header />
      <main>

        <Switch>
          <Route exact path="/">
            <Redirect to="/editor" />
          </Route>

          <Route path="/editor">
            <CodeEditorForm />
          </Route>

          <Route exact path="/comunidade">
            <CodeCommunity listOfCodes={CODES} />
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
