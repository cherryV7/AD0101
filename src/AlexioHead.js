import Head from "next/head";

const AlexioHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description"
        content="Adrian Oleksiak i JEDENTEAM to najlepsze fitness obozy, 
                super zajęcia fitness oraz najskuteczniejsze treningi personalne"
      />
      <meta property="og:title" content="Mój Fitness Obóz"/>
      {/*
     ========================================================================
     EXCLUSIVE ON themeforest.net
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Template Name   : Alexio
     Author          : Codeefly
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Copyright (c) 2013 - Codeefly
     ========================================================================
     */}
      {/* Page Title */}
      <title>JEDENTEAM FITNESS OBOZY TRENINGI</title>
      {/* / */}
      {/*-Font Icon*/}
      <link
        href="static/plugin/font-awesome/css/fontawesome-all.min.css"
        rel="stylesheet"
      />
      <link
        href="static/plugin/themify-icons/themify-icons.css"
        rel="stylesheet"
      />
      {/* / */}
      {/* Plugin CSS */}
      <link
        href="static/plugin/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="static/plugin/owl-carousel/css/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
      <link href="static/plugin/nav/css/component.css" rel="stylesheet" />
      {/* / */}
      {/* Theme Style */}
      <link href="static/css/styles.css" rel="stylesheet" />
      <link href="static/css/color/default.css" rel="stylesheet" />
      {/* / */}
      {/* Favicon */}
      <link rel="icon" href="favicon.ico" />
      {/* / */}
    </Head>
  );
};
export default AlexioHead;
