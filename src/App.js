import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CancelPage from './pages/CancelPage';

function App() {


  return (
    <Router>
      <Routes>
        {/* Ana sayfa */}
        <Route path="/" element={<HomePage />} />

        {/* Rezervasyon sayfası */}
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
