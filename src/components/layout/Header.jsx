import React from 'react';
import logo from '../../images/logo_udg.png';

const Header = () => {
  return (
    <header className='bg-white'>
      <img src={logo} alt="Universidad de Guadalajara" className="mx-auto" />
      <div className="bg-primary py-1">
        <div className="custom-width flex justify-between items-center">
          <h2 className="text-[1.4rem] font-bold text-white">Bolsa De Trabajo CUCEI</h2>
          <i className="material-icons text-5xl text-white">account_circle</i>
        </div>
      </div>
      <div className='custom-width bg-white flex justify-between'>
        <a href="google.com">Inicio</a>
        <a href="google.com">Buscar Empleo</a>
        <a href="google.com">Postular Empleo</a>
        <a href="google.com">Agendar Visita</a>
        <a href="google.com">Crear Curriculum</a>
        <a href="google.com">Participar en la feria del empleo</a>
      </div>
    </header>
  );
};

export default Header;
