import React from "react";
import { Link } from 'react-router-dom';

function Navigation (){
  return (
    <nav>
      <Link to='/acai'>Açai</Link>
      <Link to='/cupuacu'>Cupuaçu</Link>
      <Link to='/macarrao'>Macarrão</Link>
    </nav>
  )
}

export default Navigation;
