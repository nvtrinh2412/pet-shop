import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { DogsPage } from './components/DogsPage/DogsPage';
import { Carts } from './components/Carts/Carts';
import { NavBar } from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
function App() {
  const [allDogs, setAllDogs]= useState([])
  useEffect(() => {
    // try to fetch data
    //in this case import data from static file
    const data = require('./data.json');
    setAllDogs(data)
    console.log(data);
  },[])

  return (
    <Router>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogsPage allDogs= {allDogs} />} />
          <Route path="/checkout" element={<Carts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
