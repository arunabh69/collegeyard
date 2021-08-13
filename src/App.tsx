import React from 'react';
import imageHome from './assets/4853433.jpg';
import './App.css';
import NavBar from './components/Navbar/NavBar'
import SearchBox from './components/Section-1/SearchBox'

function App() {
  return (
    <div className="App">
        <img id="paraImg" src={imageHome} alt="Background"/>
        <NavBar />
        <SearchBox />
    </div>
  );
}

export default App;
