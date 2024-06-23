import React from "react";
import descripcion from "../images/descripcion.png";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";

export default function Home() {
    return (
        <div>
            {/* (START) DESCRIPTION CARD */}
            <div className="bg-white rounded-md p-2">
                <div>
                    <div className="flex items-center mb-2 space-x-2">
                        <div className="bg-primary rounded-md w-10 h-10 flex items-center justify-center">
                            <WorkOutlineRoundedIcon className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Bolsa de trabajo</h3>
                    </div>
                    <div className="text-justify">
                        <img
                            src={descripcion}
                            className="md:float-right rounded-md mb-2 md:mb-1 md:ml-5 w-full md:w-auto"
                            alt=""
                        />
                        <p>
                            La Bolsa de Trabajo del CUCEI, actúa como enlace
                            entre alumnos, egresados y empresas, relaciona a
                            egresados y alumnos con probables fuentes de trabajo
                            y promueve sus perfiles profesionales.
                        </p>
                        <br />
                        <p>
                            A través de la Bolsa de Trabajo, se constituye una
                            acción estratégica para vincular la oferta educativa
                            del CUCEI con el mercado de trabajo. Mediante este
                            programa los empleadores hacen del conocimiento de
                            la comunidad universitaria, diferentes ofertas de
                            empleo para la incorporación temprana de los
                            egresados al mercado laboral.
                        </p>
                        <br />
                        <p>
                            Además, el programa permite obtener información
                            sobre demandas específicas tales como habilidades,
                            conocimientos y actitudes que deben ser promovidas
                            entre los estudiantes e incorporadas en los
                            programas educativos como parte de sus estrategias
                            de aprendizaje.{" "}
                        </p>
                        <br />
                        <p>
                            El servicio de Bolsa de Trabajo se complementa con
                            la organización de dos eventos de reclutamiento:
                            <strong>
                                El maratón de Oportunidades Laborales que se
                                realiza en el calendario A en abril y la Feria
                                del Empleo, Emprendimiento y Prácticas
                                Profesionales CUCEI comprendida en el calendario
                                B en el mes de noviembre
                            </strong>
                            , en las instalaciones del centro universitario. En
                            dichas ferias, egresados, alumnos y público en
                            general, tiene la oportunidad de entrar en contacto
                            directo con las fuentes de empleo y satisfacer
                            necesidades.{" "}
                        </p>
                        <br />
                        <p>
                            Las historias de éxito de estudiantes o egresados
                            que a través de la Bolsa de Trabajo o de la Feria
                            del Empleo han iniciado su desempeño profesional,
                            son múltiples. En el mismo sentido, es muy amplio el
                            número de empresas e instituciones que han
                            encontrado en los egresados del CUCEI, los perfiles
                            adecuados para apoyar sus objetivos.{" "}
                        </p>
                        <br />
                        <p>
                            Las vacantes que se ofertan pueden ser un trabajo
                            fijo dentro de la empresa o bien por prestación de
                            servicio a desarrollas un proyecto con la finalidad
                            de incluir aquellos profesionistas que trabajan de
                            manera independiente.
                        </p>
                    </div>
                </div>
            </div>
            {/* (END) DESCRIPTION CARD */}
        </div>
    );
}
