import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsArchive from './pages/ProjectsArchive';
import SwitchTheme from './components/SwitchTheme';
import BackHome from './components/BackHome';

function App() {

  return (
    <>
      <Router basename="/portfolio">
        <Routes>
          <Route index element={
            <>
              <Introduction />
              <SwitchTheme />
            </>
          } />
          <Route path="projects" element={
            <>
              <ProjectsArchive />
              <BackHome />
              <SwitchTheme />
            </>
          } />
          <Route path="projects/:slug" element={
            <>
              <ProjectDetails />
              <BackHome />
              <SwitchTheme />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
