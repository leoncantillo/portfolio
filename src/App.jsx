import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails';
import SwitchTheme from './components/SwitchTheme';
import Introduction from './pages/Introduction';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={
    <>
      <Introduction />
      <SwitchTheme />
            </>
          } />
          <Route path="projects/:slug" element={
            <>
              <ProjectDetails />
              <SwitchTheme />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
