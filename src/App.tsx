
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Settings } from './pages/Settings';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
