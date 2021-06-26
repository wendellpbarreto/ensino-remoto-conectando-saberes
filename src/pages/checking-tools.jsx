import React, { useEffect } from "react";
import Head from "next/head";

import PageHeader from "../components/PageHeader";
import TimeLine from "../components/TimeLine";

const CheckingToolsPage = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("checking-tools-page");
    document.querySelector("body").classList.add("checking-tools-page");

    return () => {
      document.querySelector("html").classList.remove("checking-tools-page");
      document.querySelector("body").classList.remove("checking-tools-page");
    };
  }, []);

  const pretitle = "Ferramenta";
  const timeLineItems = [
    {
      slug: "agencia-lupa",
      pretitle,
      title: "01",
      subtitle: "Agência Lupa",
      link: "https://piaui.folha.uol.com.br/lupa/",
      children: (
        <>
          <p>
            A empresa, fundada em 2015, iniciou sua trajetória como uma agência
            de notícias especializada em fact-checking, mas, em cinco anos de
            atuação, expandiu suas atividades para o ensino de técnicas de
            checagem e para sensibilização sobre desinformação e seus riscos.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/lupa-actor.svg" alt="" />
        </>
      ),
    },
    {
      slug: "boatos.org",
      pretitle,
      title: "02",
      subtitle: "Boatos.org",
      link: "https://www.boatos.org/",
      children: (
        <>
          <p>
            Criado em junho de 2013, o Boatos.org é atualizado diariamente
            graças a uma equipe de jornalistas ávidos em descobrir a verdade.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/boatos-actor.svg" alt="" />
        </>
      ),
    },
    {
      slug: "e-farsas",
      pretitle,
      title: "03",
      subtitle: "E-farsas",
      link: "https://www.e-farsas.com/",
      children: (
        <>
          <p>
            Com a intenção de usar a própria internet para desmistificar as
            histórias que nela circulam, o E-farsas.com nasceu no dia 1 de abril
            de 2002.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/e-farsas-actor.svg" alt="" />
        </>
      ),
    },
    {
      slug: "estadao-verifica",
      pretitle,
      title: "04",
      subtitle: "Estadão verifica",
      link: "https://politica.estadao.com.br/blogs/estadao-verifica/",
      children: (
        <>
          <p>
            O Estadão Verifica é o núcleo de checagem de fatos do jornal O
            Estado de S.Paulo. A equipe é formada por Daniel Bramatti Alessandra
            Monnerat. Tiago Aguiar e Pedro Prata.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/estadao-actor.svg" alt="" />
        </>
      ),
    },
    {
      slug: "g1-fato-ou-fake",
      pretitle,
      title: "05",
      subtitle: "G1 - Fato ou fake",
      link: "https://g1.globo.com/fato-ou-fake/",
      children: (
        <>
          <p>
            O objetivo é alertar os brasileiros sobre conteúdos duvidosos
            disseminados na internet ou pelo celular, esclarecendo o que é
            notícia (fato) e o que é falso (fake).
          </p>
        </>
      ),
      media: (
        <>
          <img src="/boatos-actor.svg" alt="" />
        </>
      ),
    },
    {
      slug: "saude-sem-fake-news",
      pretitle,
      title: "06",
      subtitle: "Saúde sem fake news",
      link: "https://antigo.saude.gov.br/fakenews/",
      children: (
        <>
          <p>
            Qualquer cidadão poderá enviar gratuitamente mensagens com imagens
            ou textos que tenha recebido nas redes sociais para confirmar se a
            informação procede, antes de continuar compartilhando. O número é
            (61) 99333-8597.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/e-farsas-actor.svg" alt="" />
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          Ferramentas de checagem de notícias | COVID-19: Fake News e Saúde
          Pública
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="COVID-19: Fake News e Saúde Pública"
        subtitle={
          <>
            Ferramentas de checagem de notícias
            <a
              href="http://bit.ly/3fCLTzcChecagem"
              target="_blank"
              className="anchor ml-2"
            >
              [baixar]
            </a>
          </>
        }
      />

      <TimeLine items={timeLineItems} variant="3" />
    </>
  );
};

export default CheckingToolsPage;
