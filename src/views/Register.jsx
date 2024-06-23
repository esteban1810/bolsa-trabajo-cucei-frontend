import React from 'react';

const RegisterForm = () => {
  return (
    <div className="md:min-h-[70vh] flex items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h2 className="text-center text-xl font-bold mb-2">Bienvenido</h2>
        <form className="space-y-4">
          {/* 
          <p>Es: Estudiante</p>
          <p>Em: Empresa</p>
          <p>C: Coordinador</p>
          <p>T: Trabajador</p>
          <p>A: Administrador</p>
          <p>T: Todos</p>
          <p>E: Excepto</p> 
          */}

          {/* (INICIO) DATOS GENERALES */}
          <h3 className="pb-1 border-b-2 uppercase md:mt-4">Datos Generales (T)</h3>
          <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="nombre_completo" className="block text-sm font-medium text-gray-700">Nombre completo</label>
              <input type="text" id="nombre_completo" name="nombre_completo" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Ingresa tu nombre completo" />
            </div>
            <div className="flex-1">
              <label htmlFor="apellido_paterno" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
              <input type="text" id="apellido_paterno" name="apellido_paterno" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Ingresa tu apellido paterno" />
            </div>
            <div className="flex-1">
              <label htmlFor="apellido_materno" className="block text-sm font-medium text-gray-700">Apellido materno</label>
              <input type="text" id="apellido_materno" name="apellido_materno" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Ingresa tu apellido materno" />
            </div>
          </div>
          <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
              <input type="email" id="correo" name="correo" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Ingresa tu correo" />
            </div>
            <div className="flex-1">
              <label htmlFor="tipo_perfil" className="block text-sm font-medium text-gray-700">Tipo de perfil</label>
              <select id="tipo_perfil" name="tipo_perfil" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                <option value="estudiante">Estudiante</option>
                <option value="empresa">Empresa</option>
                <option value="coordinador">Coordinador</option>
                <option value="trabajador_uvinc">Trabajador UVINC</option>
                <option value="administrador_uvinc">Administrador UVINC</option>
              </select>
            </div>
          </div>
          {/* (FIN) DATOS GENERALES */}

          {/* (INICIO) DATOS UDG */}
          <h3 className="pb-1 border-b-2 uppercase md:pt-2">Datos UDG (TODOS EXCEPTO EMPRESA)</h3>
          <div className="flex-1">
            <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Código</label>
            <input id="codigo" name="codigo" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Ingresa tu código" />
          </div>
          {/* (FIN) DATOS UDG */}

          {/* (INICIO) DATOS UDG */}
          <h3 className="pb-1 border-b-2 uppercase md:pt-2">Datos UDG (Estudiante, Coordinador)</h3>
          <div className="flex-1">
            <label htmlFor="licenciatura" className="block text-sm font-medium text-gray-700">Licenciatura</label>
            <select id="licenciatura" name="licenciatura" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
              <option value="informatica">Licenciatura en Ingeniería Informática</option>
              <option value="fisica">Licenciatura Física</option>
              <option value="matematicas">Licenciatura Matemáticas</option>
              <option value="fotonica">Licenciatura en Ingeniería Fótonica</option>
              <option value="civil">Licenciatura en Ingeniería Civil</option>
            </select>
          </div>
          {/* (FIN) DATOS UDG */}

          {/* (INICIO) CONTRASEÑA */}
          <h3 className="pb-1 border-b-2 uppercase md:pt-2">Contraseña</h3>
          <div className="md:flex space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <div className="md:flex-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Ingresa una contraseña" />
            </div>
            <div className="md:flex-1">
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirma tu contraseña:</label>
              <input type="password" id="confirm_password" name="confirm_password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Confirma tu contraseña" />
            </div>
          </div>
          {/* (FIN) CONTRASEÑA */}

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
