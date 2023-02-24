import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Acai from './pages/Acai';
import Cupuacu from './pages/Cupuacu';
import Macarrao from './pages/Macarrao';
import Cart from './pages/Cart';

function App () {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route path="/acai" element={ <Acai /> } />
        <Route path="/cupuacu" element={ <Cupuacu /> } />
        <Route path="/macarrao" element={ <Macarrao /> } />
        <Route path="/cart" element={ <Cart /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
