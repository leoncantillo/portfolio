import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
