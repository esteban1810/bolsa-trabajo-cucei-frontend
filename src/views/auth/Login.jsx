import React from "react";
import { Link } from "react-router-dom";

import login from "../../images/login.png";

function Login() {
    return (
        <div className="md:h-[70vh] flex items-center">
            <div className="bg-white shadow-md rounded-lg p-6 md:flex md:items-center md:max-w-screen-sm md:m-auto space-x-4">
                <div className="w-5/6 m-auto flex-1">
                    <img src={login} alt="Imagen del login" />
                </div>
                <div className="flex-1">
                    <h2 className="text-center text-xl font-bold mb-2">
                        Bienvenido
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Correo
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                placeholder="Ingresa tu correo"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Aceptar
                            </button>
                        </div>
                        <div className="flex justify-between text-sm">
                            <a
                                href="www.google.com"
                                className="text-orange-500 hover:text-orange-600"
                            >
                                Olvidé mi contraseña
                            </a>
                            <Link to="/register" className="text-orange-500 hover:text-orange-600">Deseo registrarme</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
