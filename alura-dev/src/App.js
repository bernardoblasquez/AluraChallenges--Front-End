import Header from './Components/Header/Header'
import CodeEditorForm from './Components/Pages/CodeEditorForm';
import CodeCommunity from './Components/Pages/CodeCommunity';
import CodeView from './Components/Pages/CodeView';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

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
            <CodeCommunity />
          </Route>

          <Route path="/comunidade/:codeId">
            <CodeView />
          </Route>
        </Switch>

      </main>
    </>
  );
}

export default App;
