import React, { useEffect } from "react";
import Head from "next/head";

import PageHeader from "../components/PageHeader";
import TimeLine from "../components/TimeLine";

const ReferencesPage = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("references-page");
    document.querySelector("body").classList.add("references-page");

    return () => {
      document.querySelector("html").classList.remove("references-page");
      document.querySelector("body").classList.remove("references-page");
    };
  }, []);

  const pretitle = "Referência";
  const timeLineItems = [
    {
      slug: "referencia-1",
      pretitle,
      title: "01",
      subtitle: "",
      link: "http://basenacionalcomum.mec.gov.br/abase",
      children: (
        <>
          <p>
            BRASIL. Ministério da Educação. Base Nacional Comum Curricular.
            Brasília, 2018. Disponível em:{" "}
            <a
              href="http://basenacionalcomum.mec.gov.br/abase"
              target="blank"
              className="anchor font-weight-bold"
            >
              http://basenacionalcomum.mec.gov.br/abase
            </a>
            . Acesso em: 23 mar. de 2021.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/reference.png" alt="" />
        </>
      ),
    },
    {
      slug: "referencia-2",
      pretitle,
      title: "02",
      subtitle: "",
      link:
        "https://www.ceara.gov.br/2020/05/05/fake-news-sistema-imunologico-em-pleno-funcionamento-e-importante-mas-nao-evita-covid-19-c",
      children: (
        <>
          <p>
            CEARÁ, Governo do (ed.). <strong>Fake News</strong>: sistema
            imunológico em pleno funcionamento é importante, mas não evita
            covid-19. Disponível em:{" "}
            <a
              href="https://www.ceara.gov.br/2020/05/05/fake-news-sistema-imunologico-em-pleno-funcionamento-e-importante-mas-nao-evita-covid-19-c"
              target="blank"
              className="anchor font-weight-bold"
            >
              https://www.ceara.gov.br/2020/05/05/fake-news-sistema-imunologico-em-pleno-funcionamento-e-importante-mas-nao-evita-covid-19-c
            </a>
            . Acesso em: 19 mar. 2021.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/reference.png" alt="" />
        </>
      ),
    },
    {
      slug: "referencia-3",
      pretitle,
      title: "03",
      subtitle: "",
      link:
        "https://olhardigital.com.br/2019/04/02/noticias/whatsapp-lanca-ferramenta-de-checagem-para-combater-fake-news-durante-eleicoes-na-ndia",
      children: (
        <>
          <p>
            REDAÇÃO (ed.).{" "}
            <strong>
              WhatsApp lança ferramenta de checagem para combater fake news
              durante eleições na Índia
            </strong>
            . Disponível em:{" "}
            <a
              href="https://olhardigital.com.br/2019/04/02/noticias/whatsapp-lanca-ferramenta-de-checagem-para-combater-fake-news-durante-eleicoes-na-ndia"
              target="blank"
              className="anchor font-weight-bold"
            >
              https://olhardigital.com.br/2019/04/02/noticias/whatsapp-lanca-ferramenta-de-checagem-para-combater-fake-news-durante-eleicoes-na-ndia
            </a>
            . Acesso em: 19 mar. 2021.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/reference.png" alt="" />
        </>
      ),
    },
    {
      slug: "referencia-4",
      pretitle,
      title: "04",
      subtitle: "",
      link:
        "https://www.fazeducacao.com.br/post/steam-metodologia-ativa-de-aprendizagem",
      children: (
        <>
          <p>
            STEAM: o que você não sabia sobre essa Metodologia Ativa de
            Aprendizagem. Faz educação & tecnologia, 28 de Out de 2019.
            Disponível em:{" "}
            <a
              href="https://www.fazeducacao.com.br/post/steam-metodologia-ativa-de-aprendizagem"
              target="blank"
              className="anchor font-weight-bold"
            >
              https://www.fazeducacao.com.br/post/steam-metodologia-ativa-de-aprendizagem
            </a>
            . Acesso em: 27 mar. 2021.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/reference.png" alt="" />
        </>
      ),
    },
    {
      slug: "referencia-5",
      pretitle,
      title: "05",
      subtitle: "",
      link:
        "https://novaescola.org.br/conteudo/18021/como-levar-o-steam-para-a-sala-de-aula",
      children: (
        <>
          <p>
            GAROFALO, Débora. Como levar o STEAM para a sala de aula. Nova
            Escola, 25 de junho | 2019. Disponível em:{" "}
            <a
              href="https://novaescola.org.br/conteudo/18021/como-levar-o-steam-para-a-sala-de-aula"
              target="blank"
              className="anchor font-weight-bold"
            >
              https://novaescola.org.br/conteudo/18021/como-levar-o-steam-para-a-sala-de-aula
            </a>
            . Acesso em: 27 mar. 2021.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/reference.png" alt="" />
        </>
      ),
    },
    {
      slug: "referencia-6",
      pretitle,
      title: "06",
      subtitle: "",
      link:
        "https://redes.moderna.com.br/2019/05/22/como-usar-byod-na-educacao",
      children: (
        <>
          <p>
            ANSELMO, Tathiana. Como usar BYOD na educação. Redes Moderna.
            22/02/2019. Educação Inovadora. Disponível em:{" "}
            <a
              href="https://redes.moderna.com.br/2019/05/22/como-usar-byod-na-educacao"
              target="blank"
              className="anchor font-weight-bold"
            >
              https://redes.moderna.com.br/2019/05/22/como-usar-byod-na-educacao
            </a>
            . Acesso em: 27 mar. 2021.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/reference.png" alt="" />
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Referências | COVID-19: Fake News e Saúde Pública</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="COVID-19: Fake News e Saúde Pública"
        subtitle="Referências"
      />

      <TimeLine items={timeLineItems} variant="4" />
    </>
  );
};

export default ReferencesPage;
