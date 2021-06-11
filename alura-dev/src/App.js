import Header from './Components/Header/Header'
import CodeEditorForm from './Components/Pages/CodeEditorForm';
import CodeCommunity from './Components/Pages/CodeCommunity';
import CodeView from './Components/Pages/CodeView';
import { Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Route exact path="/">
          <CodeEditorForm />
        </Route>

        <Route path="/editor">
          <CodeEditorForm />
        </Route>

        <Route path="/comunidade">
          <CodeCommunity />
        </Route>

        <Route path="/view/:codeId">
          <CodeView />
        </Route>
        
      </main>
    </>
  );
}

export default App;
