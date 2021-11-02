
import React, {useState} from 'react'
import './App.css';
import Navbar from './static-elements/navbar';
import Footer from './static-elements/Footer';
import PageRouter from './router/PageRouter';

function App() {

  

  return (
    <div className="App">
        <Navbar />
        <PageRouter />
        <Footer />
    </div>
  );
}

export default App;
