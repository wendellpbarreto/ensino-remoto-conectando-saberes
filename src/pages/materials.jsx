import React, { useEffect } from "react";
import Head from "next/head";

import PageHeader from "../components/PageHeader";
import TimeLine from "../components/TimeLine";

const MaterialsPage = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("materials-page");
    document.querySelector("body").classList.add("materials-page");

    return () => {
      document.querySelector("html").classList.remove("materials-page");
      document.querySelector("body").classList.remove("materials-page");
    };
  }, []);

  const pretitle = "Material";
  const materials = [
    {
      name: "Fake News do pH do limão",
      url: "http://bit.ly/3mlPxPgFakedolimão",
    },
    { name: "Quizizz", url: "http://bit.ly/2Pyqe0gQuiz" },
    {
      name: "Sites de checagem",
      url: "http://bit.ly/3fCLTzcChecagem",
    },
    {
      name: "Experimento científico",
      url: "http://bit.ly/3cNJOhUExperimento",
    },
    {
      name: "Ferramentas de braistorm online",
      url: "http://bit.ly/3fFzTwHBraistorm",
    },
    {
      name: "Ferramentas digitais e tutoriais",
      url: "http://bit.ly/2PY9Wh2DigitaisTutoriais",
    },
    {
      name: "Modelos de rubrica para avaliação",
      url: "http://bit.ly/3mj3KMZRubricaAvaliação",
    },
  ];
  const timeLineItems = materials.map(({ name, url }, index) => ({
    slug: `tutorial-${index + 1}`,
    pretitle,
    title: `0${index + 1}`,
    subtitle: name,
    link: {
      url: url,
      target: "_blank",
    },
    children: <></>,
    media: (
      <>
        <img src="/material.png" alt="" />
      </>
    ),
  }));

  return (
    <>
      <Head>
        <title>Referências | COVID-19: Fake News e Saúde Pública</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="COVID-19: Fake News e Saúde Pública"
        subtitle="Materiais & Tutoriais"
      />

      <TimeLine items={timeLineItems} variant="5" />
    </>
  );
};

export default MaterialsPage;
