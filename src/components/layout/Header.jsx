import React from 'react';
import logo from '../../images/logo_udg.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



const Header = () => {
  return (
    <header className='bg-white'>
      <img src={logo} alt="Universidad de Guadalajara" className="mx-auto" />
      <div className="bg-primary py-1">
        <div className="custom-width flex justify-between items-center">
          <h2 className="text-[2rem] font-bold text-white">Bolsa De Trabajo CUCEI</h2>
          <div>
            <AccountCircleOutlinedIcon className='text-white mr-4 h-full' sx={{ fontSize: 40 }} />
            <MenuOutlinedIcon className='text-white m-0' sx={{ fontSize: 50 }}/>
          </div>
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
