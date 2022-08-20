//import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/home";
import About from "./components/pages/about";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  



  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
