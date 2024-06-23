import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="custom-width pt-4 lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
                <div className="text-sm lg:w-1/4">
                    <h6 className="text-xl border-b-2 border-primary w-3/4">
                        Sobre Nosotros
                    </h6>
                    <p>
                        Somos una universidad que forja profesionales para el
                        mercado laboral. Ofrecemos programas que desarrollan
                        habilidades y competencias, asegurando que nuestros
                        graduados sobresalgan en sus áreas.
                    </p>
                </div>
                <div className="text-sm lg:w-1/4">
                    <h6 className="text-xl border-b-2 border-primary w-3/4">
                        Contáctanos
                    </h6>
                    <div>
                        <a
                            href="https://maps.app.goo.gl/2T6SFRtWok6joRMXA"
                            className="py-1"
                        >
                            <FmdGoodOutlinedIcon className="pr-1" />
                            Blvd. Gral. Marcelino García Barragán 1421,
                            Olímpica, 44430 Guadalajara, Jal.
                        </a>
                        <p className="py-1">
                            <LocalPhoneRoundedIcon className="pr-1" />
                            (33) 13785900 ext. 27575.
                        </p>
                        <p className="py-1">
                            <EmailOutlinedIcon className="pr-1" />
                            uvinc@cucei.udg.mx{" "}
                        </p>
                        <strong>Horario de atención:</strong>
                        <p>Lunes a viernes, de 9:00  las 17:00 horas.</p>
                    </div>
                </div>
                <div className="text-sm lg:w-1/4">
                    <h6 className="text-xl border-b-2 border-primary w-3/4">
                        Servicios
                    </h6>
                    <div>
                        <p className="pt-1">
                            <NavigateNextRoundedIcon className="pr-1" />
                            Crear CV
                        </p>
                        <p className="pt-1">
                            <NavigateNextRoundedIcon className="pr-1" />
                            Postular empleo
                        </p>
                        <p className="pt-1">
                            <NavigateNextRoundedIcon className="pr-1" />
                            Buscar empleo
                        </p>
                        <p className="pt-1">
                            <NavigateNextRoundedIcon className="pr-1" />
                            Feria del empleo
                        </p>
                        <p className="pt-1">
                            <NavigateNextRoundedIcon className="pr-1" />
                            Generar reportes
                        </p>
                    </div>
                </div>
                <div className="text-sm lg:w-1/4">
                    <h6 className="text-xl border-b-2 border-primary w-3/4">
                        Síguenos
                    </h6>
                    <div>
                        <p>
                            Para estar informado acerca de eventos y ofertas de
                            empleo.
                        </p>
                        <a className="pr-2 text-primary">Facebook</a>
                        <a className="pr-2 text-primary">Instagram</a>
                        <a className="pr-2 text-primary">Whatsapp</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
