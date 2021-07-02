import React from "react";
import _ from "lodash";

const Footer = () => {
  const students = _.sortBy(
    [
      {
        name: "Wendell P. Barreto, Eng. de Software",
        lattes: "http://lattes.cnpq.br/6507543072006940",
      },
      {
        name: "Russiana C. S. da Silva, Profª. de Língua Portuguesa",
        lattes: "http://lattes.cnpq.br/2289046034565039",
      },
      {
        name: "Raíza de A. D. Soares, Profª. de Química",
        lattes: "http://lattes.cnpq.br/3768644861934814",
      },
      {
        name: "Maria Lourena De Queiroz",
        lattes: "",
      },
      {
        name: "Ronilson F. da Silva, Prof. de Geografia",
        lattes: "http://lattes.cnpq.br/1863930085492453",
      },
      {
        name: "Ozineide O. da Silva, Profª. de Língua Portuguesa",
        lattes: "http://lattes.cnpq.br/1480064142220022",
      },
      {
        name: "Josélia P. da Silva,  Especialista em Psicopedagogia",
        lattes: "http://lattes.cnpq.br/2812150317717793",
      },
      {
        name: "Ricardo Wagner da P. Oliveira, Matemático",
        lattes: "http://lattes.cnpq.br/3674680088104212",
      },
      {
        name: "Maria da Conceição A. Moreno",
        lattes: "http://lattes.cnpq.br/2619341666625630",
      },
    ],
    "name"
  );

  return (
    <div className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <strong class="d-block text-uppercase mb-3">O Projeto</strong>
            <p className="text-white small font-weight-bold">
              Trabalho desenvolvido durante a disciplina de Educação Aberta e À
              Distância do Mestrado Profissional em Inovação em Tecnologias
              Educacionais do PPgITE - IMD / UFRN no ano de 2021.
            </p>
          </div>
          <div className="col-md-4">
            <strong class="d-block text-uppercase mb-3">Orientadores</strong>
            <ul>
              <li>
                <a
                  href="http://lattes.cnpq.br/3992106322474895"
                  target="_blank"
                  className="small"
                >
                  Profª. Drª Adja Ferreira de Andrade
                </a>
              </li>
              <li>
                <a
                  href="http://lattes.cnpq.br/4186592914396319"
                  target="_blank"
                  className="small"
                >
                  Profª. Drª Célia Maria de Araújo
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <strong class="d-block text-uppercase mb-3">Criadores</strong>
            <ul>
              {students.map(({ name, lattes }) => (
                <li key={lattes}>
                  <a href={lattes} target="_blank" className="small">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-8 col-md-4">
            <a href="https://www.ufrn.br/" target="_blank">
              <img
                src="/ufrn-logo.png"
                alt="UFRN"
                className="d-block w-100 py-4 px-5"
              />
            </a>
          </div>
          <div className="col-8 col-md-4">
            <a href="https://www.imd.ufrn.br/portal/" target="_blank">
              <img
                src="/imd-logo.svg"
                alt="IMD"
                className="d-block w-100 py-4 px-5"
              />
            </a>
          </div>
          <div className="col-8 col-md-4">
            <a href="https://ppgite.imd.ufrn.br/" target="_blank">
              <img
                src="/ppgite-logo.png"
                alt="PPgITE-UFRN"
                className="d-block w-100 py-4 px-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
