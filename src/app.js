import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Home from './pages/home';

function App() {

  return (
      
      <BrowserRouter>
        <Home />
      </BrowserRouter>
  );
}

export default App;
