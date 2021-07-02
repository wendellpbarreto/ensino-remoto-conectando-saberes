import Head from "next/head";

import Footer from "../components/Footer";

import "../styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Ensino Remoto: Conectando Saberes</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://kit.fontawesome.com/70f4d2f6e0.js"
          crossorigin="anonymous"
        />
      </Head>
      <div className="wrap">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
