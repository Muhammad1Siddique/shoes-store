import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Shop} from './Components/Shop';
import {Contact} from './Components/Contact';
import {NotFound} from './Components/NotFound';
import {Products} from './Components/Products';
import {Details} from './Components/Details';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Shop" element={<Shop />}>
          <Route path="/" element={<Products />}></Route>
          <Route path=":productID" element={<Details />}></Route>
        </Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
        
    </Router>
  );
}

export default App;
