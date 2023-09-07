import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import OrderHere from './components/OrderHere';
import BookTable from './components/BookTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/order-here" element={<OrderHere/>}/>
        <Route path="/book-table" element={<BookTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
