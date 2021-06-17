import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import CodeEditorForm from './Pages/CodeEditorForm';
import CodeCommunity from './Pages/CodeCommunity';
import Page404 from './Pages/Page404';
import CodeView from './Pages/CodeView';
import searchLocalStorage from './LocalStorage/searchLocalStorage';
import './App.scss';




function App() {

  const idLocalStorage = "aluraDev/listOfCODES";
  const [listOfCodes, setListOfCode] = useState('');

  
  //console.log(`opa: ${JSON.parse(localStorage.getItem(idLocalStorage))}`)
  
  useEffect(()=>{

    searchLocalStorage("aluraDev/listOfCODES", setListOfCode);
    console.log("entrei no useEffect")

  },[])

  const updateListOfCodesHandler = (newCode) => {

    setListOfCode((prevListOfCodes) => {
      localStorage.setItem(idLocalStorage, JSON.stringify([...prevListOfCodes, newCode]))
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
