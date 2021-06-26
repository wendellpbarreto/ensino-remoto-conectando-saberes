import React from "react";
import _ from "lodash";

import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <>
      <PageHeader />
      <div className="hero w-100 vh-100 container">
        <div className="row h-100 align-items-center">
          <div className="col-md-5">
            <h1 className="text-secondary text-uppercase d-block">
              Ensino Remoto
            </h1>
            <span className="text-primary h3 text-uppercase mb-3 d-block">
              Conectando Saberes
            </span>
            <p>
              Para o professor aprofundar seus conhecimentos sobre ensino
              remoto, seus desafios e possibilidades
            </p>
            <a href="" className="btn btn-outline-primary mt-4">
              Começe agora!
            </a>
          </div>
          <div className="col-md-7">
            <img src="/art.png" className="d-block w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
