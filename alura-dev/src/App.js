import Header from './Components/Header/Header'
import EditorPage from './Components/Pages/EditorPage';
import { Route } from 'react-router-dom';
import CommunityPage from './Components/Pages/CommunityPage';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/editor">
          <EditorPage />
        </Route>

        <Route path="/comunidade">
          <CommunityPage />
        </Route>
        
      </main>
    </>
  );
}

export default App;
