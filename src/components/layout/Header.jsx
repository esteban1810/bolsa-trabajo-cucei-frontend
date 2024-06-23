import React, { useState } from 'react';
import logo from '../../images/logo_udg.png';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='bg-white'>
      <img src={logo} alt="Universidad de Guadalajara" className="mx-auto" />
      <div className="bg-primary py-1">
        <div className="custom-width flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Bolsa De Trabajo CUCEI</h2>
          <div className="relative">
            <MenuOutlinedIcon onClick={toggleMenu} className='text-white m-0 cursor-pointer' sx={{ fontSize: 50 }}/>
            {showMenu && (
              <ul className="absolute bg-white mt-2 rounded shadow-md w-48 right-0">
                <li className="whitespace-nowrap px-2 border-b-2 border-gray-300 font-bold">General</li>
                <li className="whitespace-nowrap py-1 px-2 pt-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Inicio</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Buscar Empleo</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Postular Empleo</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Agendar Visita</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Crear Curriculum</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Feria del empleo</a></li>
                <li className="whitespace-nowrap  px-2 border-b-2 border-gray-300 font-bold">Usuario</li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/login" className='block'>Iniciar Sesión</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/register" className='block'>Registrarse</a></li>
                <li className="whitespace-nowrap py-1 px-2 hover:bg-primary hover:text-white"><a href="/" className='block'>Cerrar Sesión</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
