import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
//import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
    </Router>
  );
}

export default App;
