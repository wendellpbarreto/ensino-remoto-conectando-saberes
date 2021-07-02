import React, { useState } from "react";
import _ from "lodash";
import { Card, Accordion, Button, Modal } from "react-bootstrap";
import { Fade } from "react-reveal";
import Link from "next/link";

import PageHeader from "../components/PageHeader";

const InitNowModal = ({ show, onClose }) => {
  const rooms = [
    {
      title: "Sala 1",
      href: "https://bit.ly/EnsinoRemotoConectandoSaberesSala1",
    },
    {
      title: "Sala Acessível",
      acessible: true,
      href: "https://bit.ly/EnsinoRemotoConectandoSaberesSalaAcessivel",
    },
  ];

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header
        className="d-flex flex-column align-items-center justify-content-center"
        closeButton
      >
        <Modal.Title class="text-center d-block h4 text-uppercase font-weight-bold m-0 text-secondary">
          Ensino Remoto
        </Modal.Title>
        <span className="modal-subtitle text-center d-block w-100 p text-uppercase font-weight-bold m-0">
          Conectando Saberes
        </span>
      </Modal.Header>
      <Modal.Body>
        <span
          className="w-100 d-block text-center mb-4 small mx-auto"
          style={{ color: "#c4c4c4", maxWidth: "400px" }}
        >
          Acesse uma das salas para iniciar o curso
          <small className="d-block">
            OBS: São permitidos somente e-mails pessoais (não institucionais)
          </small>
        </span>

        <div className="row">
          {rooms.map((room, i) => (
            <div key={`room-${i}`} className="col-md-4">
              <Link href={room.href} passHref>
                <a
                  target="_blank"
                  className="d-flex flex-column align-items-center justify-content-center text-center border rounded-sm p-4"
                  style={{ height: "150px" }}
                >
                  <i
                    className={`fad fa-${
                      room.acessible ? "sign-language" : "arrow-from-left"
                    } fa-2x mb-3`}
                  ></i>
                  <p className="m-0">
                    {room.title}
                    {room.acessible ? (
                      <small className="d-block">Em Libras</small>
                    ) : (
                      ""
                    )}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

const Home = () => {
  const [showInitModal, setShowInitModal] = useState(false);

  const units = [
    {
      number: 0,
      slug: "unit-1",
      title: "Do ensino presencial ao ensino virtual",
      lessons: [
        { number: 1, title: "O que é ensino remoto?" },
        {
          number: 2,
          title: "Diferença entre ensino remoto e educação a distância",
        },
      ],
    },
    {
      number: 1,
      slug: "unit-2",
      title: "Ensino Remoto: possibilidades e desafios",
      lessons: [
        { number: 1, title: "Ambientes virtuais de aprendizagem" },
        { number: 2, title: "Ferramentas para o ensino remoto" },
        { number: 3, title: "Avaliação remota" },
      ],
    },
    {
      number: 2,
      slug: "unit-3",
      title: "Algumas reflexões",
      lessons: [
        { number: 1, title: "Competências digitais na Educação" },
        { number: 2, title: "Conclusão" },
      ],
    },
  ];

  const methodologyItems = [
    {
      slug: "video",
      icon: "fad fa-video",
      text: "Vídeos expositivos sobre os temas",
    },
    { slug: "materials", icon: "fad fa-copy", text: "Material das aulas" },
    {
      slug: "activities",
      icon: "fad fa-ballot-check",
      text: "Atividades sobre os temas",
    },
  ];

  const handleShowInitModal = () => setShowInitModal(true);

  return (
    <>
      <PageHeader onShowInitModal={handleShowInitModal} />
      <div className="hero w-100  container text-center text-md-left position-relative">
        <div
          className="h-100"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        >
          <div className="row align-items-center h-100 position-relative hero-inner">
            <div className="col-md-6 col-lg-5">
              <Fade left>
                <h2 className="text-secondary text-uppercase d-block">
                  Ensino Remoto
                </h2>
                <span className="text-primary h3 text-uppercase mb-3 d-block">
                  Conectando Saberes
                </span>
                <p>
                  Para o professor aprofundar seu conhecimento sobre ensino
                  remoto, reconhecer os desafios e aprender a extrair o melhor
                  desta metodologia
                </p>
                <img src="/art.png" alt="" className="w-100 d-md-none" />
                <button
                  type="button"
                  className="btn btn-outline-primary mt-4"
                  onClick={handleShowInitModal}
                >
                  Começe agora!
                </button>
              </Fade>
            </div>
            <div className="col-md-6 col-lg-7">
              <img
                src="/art.png"
                alt=""
                className="w-100 d-none d-md-block d-lg-none"
              />
            </div>
          </div>
        </div>

        <a
          href="#objetivos"
          className="hero-btn-down position-absolute bottom-0 start-50 d-none d-md-block"
        >
          <i className="fal fa-mouse-alt text-primary"></i>
        </a>
      </div>
      <div className="container">
        <div
          id="objetivos"
          className="section "
          style={{ marginBottom: "40px" }}
        >
          <div className="pb-5">
            <h2 className="text-secondary text-uppercase d-block text-center mb-0">
              OBJETIVOS
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <Fade left>
                <img src="/content2.png" alt="" className="d-block w-100" />
              </Fade>
            </div>
            <div className="col-md-6 mb-4">
              <Fade right>
                <h4 className="text-uppercase">Geral</h4>
                <p>
                  - Entender o ensino remoto, reconhecendo os desafios e
                  possibilidades para o professor.
                </p>
                <h6 className="text-uppercase">Específicos</h6>
                <p className="small">
                  - Compreender o que é ensino remoto;
                  <br />
                  - Diferenciar o ensino remoto da educação a distância;
                  <br />
                  - Conhecer possíveis Ambientes virtuais de aprendizagem para o
                  ensino remoto;
                  <br />
                  - Conhecer ferramentas digitais que podem ser utilizadas
                  remotamente;
                  <br />
                  - Compreender como avaliar remotamente;
                  <br />- Compreender quais são as competências digitais
                  necessárias à educação.
                </p>
              </Fade>
            </div>
          </div>
        </div>

        <div
          id="publico-alvo"
          className="section text-center text-md-right"
          style={{ marginBottom: "40px" }}
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 mb-4">
              <Fade left>
                <div className="pb-md-5 d-flex flex-column align-items-md-end">
                  <h2 className="text-secondary text-uppercase d-block  ">
                    Público Alvo
                  </h2>
                  <h6 className=" d-block">
                    Professores da Educação Básica com conhecimento básico em
                    informática.
                  </h6>
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-4 d-none d-md-block"
                    onClick={handleShowInitModal}
                  >
                    Começe agora!
                  </button>
                </div>
              </Fade>
            </div>
            <div className="col-md-5 mb-4">
              <Fade right>
                <img src="/teacher.png" alt="" className="d-block w-100" />
              </Fade>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-primary mt-4 d-md-none"
                  onClick={handleShowInitModal}
                >
                  Começe agora!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="conteudo"
          className="section text-center text-md-left"
          style={{ marginBottom: "40px" }}
        >
          <div className="row align-items-center">
            <div className="col-md-4 mb-4">
              <Fade bottom>
                <img src="/content.png" alt="" className="d-block w-100" />
              </Fade>
            </div>
            <div className="col-md-8 mb-4">
              <Fade bottom>
                <div className="pb-5">
                  <h2 className="text-secondary text-uppercase d-block  mb-0">
                    Conteúdo
                  </h2>
                  <p className="mw-400 mx-auto  font-weight-bold text-uppercase">
                    Este curso é composto por 7 aulas dispostas em 3 unidades
                  </p>
                </div>
                <Accordion defaultActiveKey="0">
                  {units.map((unit) => (
                    <Card key={unit.slug}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={unit.number + 1}
                        >
                          <span className="">Unidade {unit.number + 1}</span> -{" "}
                          {unit.title}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={unit.number + 1}>
                        <Card.Body>
                          {unit.lessons.map((lesson) => (
                            <p
                              key={`${unit.slug}-${lesson.number}`}
                              className="pl-4"
                            >
                              {lesson.number}. {lesson.title}
                            </p>
                          ))}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </Fade>
            </div>
          </div>
        </div>

        <div
          id="metodologia"
          className="section"
          style={{ marginBottom: "40px" }}
        >
          <div className="pb-5">
            <Fade>
              <h2 className="text-secondary text-uppercase d-block text-center mb-0">
                METODOLOGIA
              </h2>
            </Fade>
          </div>

          <div className="row align-items-center justify-content-center mb-5">
            <Fade bottom>
              {methodologyItems.map((mItem) => (
                <div key={mItem.slug} className="col-md-3">
                  <div
                    className="d-flex flex-column align-items-center justify-content center text-center background-light-primary rounded-sm px-3 py-5 mx-3 rounded bg-light-primary"
                    style={{ backgroundColor: "rgb(234 242 246 / 18%)" }}
                  >
                    <i className={`${mItem.icon} fa-2x mb-4`}></i>
                    <h6 className="m-0">{mItem.text}</h6>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
          <div className="d-flex align-items-center justify-content-center w-100">
            <button
              type="button"
              className="btn btn-primary text-white mt-4"
              onClick={handleShowInitModal}
            >
              Começe agora!
            </button>
          </div>
        </div>
      </div>
      <InitNowModal
        show={showInitModal}
        onClose={() => setShowInitModal(false)}
      />
    </>
  );
};

export default Home;
