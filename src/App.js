import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { DogsPage } from './components/DogsPage/DogsPage';
import { Carts } from './components/Carts/Carts';
import { NavBar } from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { CartContext } from './components/Context/CartContext';

function App() {
  const [allDogs, setAllDogs] = useState([])
  const [myCart, addToCart]= useState([{}])
  const [total,setTotal] = useState(0)
  useEffect(() => {
    // try to fetch data
    //in this case import data from static file
    const data = require('./data.json');
    setAllDogs(data)
    console.log(data);
  }, [])

  return (
    <CartContext.Provider value={{myCart,addToCart, total,setTotal}}>
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<DogsPage allDogs={allDogs} />} />
            <Route path="/checkout" element={<Carts />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
