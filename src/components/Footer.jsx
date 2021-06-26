import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
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
