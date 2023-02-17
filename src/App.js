import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Acai from './pages/Acai';
import Cupuacu from './pages/Cupuacu';
import Macarrao from './pages/Macarrao';

function App () {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/acai" element={ <Acai /> } />
        <Route path="/cupuacu" element={ <Cupuacu /> } />
        <Route path="/macarrao" element={ <Macarrao /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
