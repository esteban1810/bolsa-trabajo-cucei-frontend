import React from 'react';
import logo from '../../images/logo_udg.png';

const Header = () => {
  return (
    <header>
      <div className="bg-white">
        <img src={logo} alt="Universidad de Guadalajara" className="mx-auto" />
      </div>
      <div className="bg-primary flex items-center py-1">
        <div className="custom-width flex justify-between items-center">
          <h2 className="text-[1.4rem] font-bold text-white">Centro Universitario de Ciencias Exactas e Ingenierías</h2>
          <i className="material-icons text-5xl text-white">account_circle</i>
        </div>
      </div>
    </header>
  );
};

export default Header;
