import React from "react";
import _ from "lodash";
import { Card, Accordion, Button } from "react-bootstrap";

import PageHeader from "../components/PageHeader";

const Home = () => {
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
        { number: 2, title: "Avaliação remota" },
      ],
    },
    {
      number: 2,
      slug: "unit-3",
      title: "Algumas reflexões",
      lessons: [
        { number: 1, title: "Competências digitais na Educação" },
        { number: 2, title: "Conclusão " },
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

  return (
    <>
      <PageHeader />
      <div className="hero w-100 vh-100 container">
        <div
          className="h-100"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div
            className="row align-items-center h-100 position-relative"
            style={{
              backgroundImage: `url('/art.png')`,
              backgroundPosition: "right center",
              backgroundSize: "auto 77.5%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="col-md-5">
              <h1 className="text-secondary text-uppercase d-block">
                Ensino Remoto
              </h1>
              <span className="text-primary h3 text-uppercase mb-3 d-block">
                Conectando Saberes
              </span>
              <p>
                Para o professor aprofundar seu conhecimento sobre ensino
                remoto, reconhecer os desafios e aprender a extrair o melhor
                desta metodologia
              </p>
              <a href="" className="btn btn-outline-primary mt-4">
                Começe agora!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          id="objetivos"
          className="section "
          style={{ marginBottom: "100px" }}
        >
          <div className="pb-5">
            <h1 className="text-secondary text-uppercase d-block text-center mb-0">
              OBJETIVOS
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src="/content2.png" alt="" className="d-block w-100" />
            </div>
            <div className="col-md-6 mb-4">
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
            </div>
          </div>
        </div>
        <div
          id="conteudo"
          className="section "
          style={{ marginBottom: "100px" }}
        >
          <div className="row align-items-center">
            <div className="col-md-4 mb-4">
              <img src="/content.png" alt="" className="d-block w-100" />
            </div>
            <div className="col-md-8 mb-4">
              <div className="pb-5">
                <h1 className="text-secondary text-uppercase d-block text-left mb-0">
                  Conteúdo
                </h1>
                <p className="mw-400 mx-auto text-left font-weight-bold text-uppercase">
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
            </div>
          </div>
        </div>

        <div className="container">
          <div
            id="metodologia"
            className="section"
            style={{ marginBottom: "100px" }}
          >
            <div className="pb-5">
              <h1 className="text-secondary text-uppercase d-block text-center mb-0">
                METODOLOGIA
              </h1>
            </div>

            <div className="row align-items-center justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
