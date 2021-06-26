import React, { useEffect } from "react";
import Head from "next/head";

import PageHeader from "../components/PageHeader";
import TimeLine from "../components/TimeLine";

const FollowingTeachingPage = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("following-teaching-page");
    document.querySelector("body").classList.add("following-teaching-page");

    return () => {
      document
        .querySelector("html")
        .classList.remove("following-teaching-page");
      document
        .querySelector("body")
        .classList.remove("following-teaching-page");
    };
  }, []);

  const pretitle = "Atividade";
  const timeLineItems = [
    {
      slug: "investigar",
      pretitle,
      title: "01",
      subtitle: "investigar",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Materiais compartilhados via redes sociais</p>
          <strong>Como?</strong>
          <p>
            Roda de conversa; exploração da problemática; provocações; quiz de{" "}
            Fake News
          </p>
        </>
      ),
      media: (
        <>
          <img src="/social-networks.png" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 01 - Investigar",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>Identificar o que é fato e o que é fake;</li>
              <li>
                Despertar os conhecimentos prévios dos alunos sobre a temática.
              </li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 1h/a</p>
            <p>Momento 1: Roda de conversa</p>
            <ul>
              <li>
                Discutir Fake News no contexto da pandemia, partindo da notícia
                falsa do limão alcalino (1).
              </li>
            </ul>
            <p>Momento 2: Quiz das Fake News</p>
            <ul>
              <li>
                Realizar um jogo de perguntas e respostas através do aplicativo
                Quizizz (2), para que o aluno possa identificar, com base nos
                seus conhecimentos prévios, quais daquelas notícias são reais ou
                falsas.
              </li>
            </ul>
            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LP40 - Analisar o fenômeno da pós-verdade – discutindo as
              condições e os mecanismos de disseminação de Fake News e também
              exemplos, causas e consequências desse fenômeno e da prevalência
              de crenças e opiniões sobre fatos –, de forma a adotar atitude
              crítica em relação ao fenômeno e desenvolver uma postura flexível
              que permita rever crenças e opiniões quando fatos apurados as
              contradisserem.
            </p>
            <p>
              EM13CNT207 - Identificar, analisar e discutir vulnerabilidades
              vinculadas às vivências e aos desafios contemporâneos aos quais as
              juventudes estão expostas, considerando os aspectos físico,
              psicoemocional e social, a fim de desenvolver e divulgar ações de
              prevenção e de promoção da saúde e do bem-estar.
            </p>
            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (1) Fake do limão:{" "}
                <a
                  href="http://bit.ly/3mlPxPgFakedolimão"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3mlPxPgFakedolimão
                </a>
              </li>
              <li>
                (2) Quizizz:{" "}
                <a
                  href="http://bit.ly/2Pyqe0gQuiz"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/2Pyqe0gQuiz
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      slug: "descobrir",
      pretitle,
      title: "02",
      subtitle: "descobrir",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Padrões que caracterizam Fake News</p>
          <strong>Como?</strong>
          <p>
            Identificar conteúdo científico e sua relação com as Fake News;
            realizar experimento do repolho roxo
          </p>
        </>
      ),
      media: (
        <>
          <img src="/discover.svg" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 02 - Descobrir",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>Conhecer as características de uma Fake News;</li>
              <li>
                Utilizar fontes confiáveis de informação científica durante a
                prática de pesquisa de dados e informações (agravos, doenças e
                saúde pública);
              </li>
              <li>
                Reconhecer as Tecnologias mais utilizadas para disseminação de
                Fake News;
              </li>
              <li>Conhecer as Tecnologias de validação de Fake News;</li>
              <li>Conceituar substâncias ácidas e básicas, escala de pH.</li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 2h/a</p>
            <p>Momento 1: Desvendando as Fake News</p>
            <ul>
              <li>
                Discutir os padrões que caracterizam as fakes news (retomar o
                quiz e a notícia falsa do limão), e refletir sobre os critérios
                dos alunos para definir as notícias como falsas ou verdadeiras;
              </li>
              <li>
                Estimular os estudantes a buscar, por meio de seus próprios
                dispositivos, ferramentas de pesquisa online que possibilitem a
                identificação da veracidade das notícias do quiz (3).
              </li>
            </ul>
            <p>Momento 2: Experimento</p>
            <ul>
              <li>
                Identificar, através de uma experiência científica, as
                propriedades químicas do limão (4);
              </li>
              <li>
                Refletir acerca dos possíveis danos à saúde pública que a fake
                news do limão pode causar - brainstorm com ferramenta online
                (Answer Garden ou Mentimeter) (5);
              </li>
            </ul>
            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LGG702 - Avaliar o impacto das tecnologias digitais da
              informação e comunicação (TDIC) na formação do sujeito e em suas
              práticas sociais, para fazer uso crítico dessa mídia em práticas
              de seleção, compreensão e produção de discursos em ambiente
              digital.
            </p>
            <p>
              EM13LGG704 - Apropriar-se criticamente de processos de pesquisa e
              busca de informação, por meio de ferramentas e dos novos formatos
              de produção e distribuição do conhecimento na cultura de rede.
            </p>
            <p>
              EM13CNT205 - Interpretar resultados e realizar previsões sobre
              atividades experimentais, fenômenos naturais e processos
              tecnológicos, com base nas noções de probabilidade e incerteza,
              reconhecendo os limites explicativos das ciências.
            </p>
            <p>
              EM13CNT303 - Interpretar textos de divulgação científica que
              tratem de temáticas das Ciências da Natureza, disponíveis em
              diferentes mídias, considerando a apresentação dos dados, tanto na
              forma de textos como em equações, gráficos e/ou tabelas, a
              consistência dos argumentos e a coerência das conclusões, visando
              construir estratégias de seleção de fontes confiáveis de
              informações.
            </p>
            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (3) Sites de checagem:{" "}
                <a
                  href="http://bit.ly/3fCLTzcChecagem"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3fCLTzcChecagem
                </a>
              </li>
              <li>
                (4) Experimento:{" "}
                <a
                  href="http://bit.ly/3cNJOhUExperimento"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3cNJOhUExperimento
                </a>
              </li>
              <li>
                (5) Ferramentas de braistorm online:{" "}
                <a
                  href="http://bit.ly/3fFzTwHBraistorm"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3fFzTwHBraistorm
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      slug: "conectar",
      pretitle,
      title: "03",
      subtitle: "conectar",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Pessoas, pensamentos, cultura</p>
          <strong>Como?</strong>
          <p>
            Montar grupos; discutir e pensar em soluções criativas para diminuir
            a disseminação de Fake News no espaço de vivência
          </p>
        </>
      ),
      media: (
        <>
          <img src="/connect.svg" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 03 - Conectar",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>
                Buscar soluções digitais criativas para diminuir a disseminação
                de fake News.
              </li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 2h/a</p>
            <p>Momento 1: Pensando soluções</p>
            <ul>
              <li>
                Montar grupos, discutir e pensar em soluções digitais criativas
                para diminuir a disseminação de fake news no espaço de vivência;
              </li>
            </ul>
            <p>Momento 2: Definindo os recursos tecnológicos</p>
            <ul>
              <li>
                Cada grupo deverá escolher as estratégias e a ferramenta
                tecnológica para realizar as ações de conscientização sobre a
                disseminação de notícias falsas;
              </li>
            </ul>
            <p>Momento 3: Tutoria</p>
            <ul>
              <li>
                Ao definirem as estratégias (vídeo, podcast, banner,
                infográfico, postagens em redes sociais, etc.), os estudantes
                podem dialogar com os professores sobre ferramentas tecnológicas
                (6) que possibilitem a construção dos seus materiais digitais de
                conscientização;
              </li>
              <li>
                Os estudantes podem neste momento escolher seu professor tutor,
                o qual irá orientá-los na apropriação técnica da ferramenta
                tecnológica escolhida.
              </li>
            </ul>
            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LGG701 - Explorar tecnologias digitais da informação e
              comunicação (TDIC), compreendendo seus princípios e
              funcionalidades, e utilizá-las de modo ético, criativo,
              responsável e adequado a práticas de linguagem em diferentes
              contextos.
            </p>
            <p>
              EM13LGG703 - Utilizar diferentes linguagens, mídias e ferramentas
              digitais em processos de produção coletiva, colaborativa e
              projetos autorais em ambientes digitais.
            </p>
            <p>
              EM13CNT303 - Interpretar textos de divulgação científica que
              tratem de temáticas das Ciências da Natureza, disponíveis em
              diferentes mídias, considerando a apresentação dos dados, tanto na
              forma de textos como em equações, gráficos e/ou tabelas, a
              consistência dos argumentos e a coerência das conclusões, visando
              construir estratégias de seleção de fontes confiáveis de
              informações.
            </p>
            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (6) Ferramentas digitais e tutoriais:{" "}
                <a
                  href="http://bit.ly/2PY9Wh2DigitaisTutoriais"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/2PY9Wh2DigitaisTutoriais
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      slug: "criar",
      pretitle,
      title: "04",
      subtitle: "criar",
      children: (
        <>
          <strong>O quê?</strong>
          <p>
            Material direcionado a comunidade com informações sobre as Fake News
            e o impacto na saúde pública
          </p>
          <strong>Como?</strong>
          <p>
            Em colaboração; adquirir conhecimento sobre os métodos tecnológicos
            de produção de podcasts, vídeos, infográficos, publicações em redes
            sociais, etc
          </p>
        </>
      ),
      media: (
        <>
          <img src="/create.svg" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 04 - Criar",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>
                Produzir material educativo com recursos tecnológicos para
                combater a disseminação das Fake News.
              </li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 4h/a</p>
            <p>Momento 1: Oficina</p>
            <ul>
              <li>
                Os grupos se organizam e estudam, junto aos seus tutores, sobre
                a utilização das ferramentas tecnológicas escolhidas (tutoriais
                (6), orientações, testes, etc.) para construção dos materiais
                digitais de conscientização;
              </li>
            </ul>
            <p>Momento 2: Construção</p>
            <ul>
              <li>
                Cada grupo produzirá, com base na estratégia escolhida e sob
                supervisão do professor tutor, seus materiais digitais de
                conscientização sobre a disseminação de notícias falsas.
              </li>
            </ul>
            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LGG701 - Explorar tecnologias digitais da informação e
              comunicação (TDIC), compreendendo seus princípios e
              funcionalidades, e utilizá-las de modo ético, criativo,
              responsável e adequado a práticas de linguagem em diferentes
              contextos.
            </p>
            <p>
              EM13LGG703 - Utilizar diferentes linguagens, mídias e ferramentas
              digitais em processos de produção coletiva, colaborativa e
              projetos autorais em ambientes digitais.
            </p>
            <p>
              EM13LP17 - Elaborar roteiros para a produção de vídeos variados
              (vlog, videoclipe, videominuto, documentário etc.), apresentações
              teatrais, narrativas multimídia e transmídia, podcasts, playlists
              comentadas etc., para ampliar as possibilidades de produção de
              sentidos e engajar-se em práticas autorais e coletivas.
            </p>
            <p>
              EM13LP18 - Utilizar softwares de edição de textos, fotos, vídeos e
              áudio, além de ferramentas e ambientes colaborativos para criar
              textos e produções multissemióticas com finalidades diversas,
              explorando os recursos e efeitos disponíveis e apropriando-se de
              práticas colaborativas de escrita, de construção coletiva do
              conhecimento e de desenvolvimento de projetos.
            </p>
            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (6) Ferramentas digitais e tutoriais:{" "}
                <a
                  href="http://bit.ly/2PY9Wh2DigitaisTutoriais"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/2PY9Wh2DigitaisTutoriais
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      slug: "refletir",
      pretitle,
      title: "05",
      subtitle: "refletir",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Os impactos das ações realizadas</p>
          <strong>Como?</strong>
          <p>
            Relatos dos alunos sobre resultados das produções no seu contexto e
            comunidade; rubrica
          </p>
        </>
      ),
      media: (
        <>
          <img src="/students.png" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 05 - Refletir",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>
                Refletir e avaliar o processo de criação do material digital e
                de seu impacto na sociedade.
              </li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 1h/a</p>
            <p>Momento 1: Divulgação</p>
            <ul>
              <li>
                Divulgar os materiais de conscientização construídos para que a
                comunidade escolar possa ter acesso e reflita sobre os impactos
                das fake news na sociedade;
              </li>
            </ul>
            <p>Momento 2: Avaliação</p>
            <ul>
              <li>
                Discussão dialogada: avaliação sobre o trabalho realizados a
                partir das produções. Relatos dos alunos sobre resultados das
                produções no seu contexto e comunidade;
              </li>
              <li>
                Aplicação da ferramenta rubrica para avaliação geral do projeto,
                tanto por parte dos estudantes - autoavaliação -, quanto por
                parte do professor - avaliação da turma (7).
              </li>
            </ul>

            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LGG702 - Avaliar o impacto das tecnologias digitais da
              informação e comunicação (TDIC) na formação do sujeito e em suas
              práticas sociais, para fazer uso crítico dessa mídia em práticas
              de seleção, compreensão e produção de discursos em ambiente
              digital.
            </p>
            <p>
              EM13CNT302 - Comunicar, para públicos variados, em diversos
              contextos, resultados de análises, pesquisas e/ou experimentos,
              elaborando e/ou interpretando textos, gráficos, tabelas, símbolos,
              códigos, sistemas de classificação e equações, por meio de
              diferentes linguagens, mídias, tecnologias digitais de informação
              e comunicação (TDIC), de modo a participar e/ou promover debates
              em torno de temas científicos e/ou tecnológicos de relevância
              sociocultural e ambiental.
            </p>

            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (7) Modelos de rubrica para avaliação:{" "}
                <a
                  href="http://bit.ly/3mj3KMZRubricaAvaliação"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3mj3KMZRubricaAvaliação
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Sequência didática | COVID-19: Fake News e Saúde Pública</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="COVID-19: Fake News e Saúde Pública"
        subtitle={
          <>
            Sequência didática com metodologia STEAM
            <a
              href="http://bit.ly/SDfakeesaude"
              target="_blank"
              className="anchor ml-2"
            >
              [baixar]
            </a>
          </>
        }
      />

      <TimeLine items={timeLineItems} />
    </>
  );
};

export default FollowingTeachingPage;
