import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from '../pages/Main/Main'; 
import NavbarRelinars from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarRelinars />
        
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
