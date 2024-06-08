import Head from 'next/head';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import TeamSlider from '../components/Slider/TeamSlider';
import Spacing from '../components/Spacing';

export default function About() {
  const funfaceData = [
    {
      title: 'Clients Heureux',
      factNumber: '2K',
    },
    {
      title: 'Projets Réalisés',
      factNumber: '1K',
    },
    {
      title: 'Projets Livrés à Temps',
      factNumber: '95%',
    },
    {
      title: 'Sites Web Lancés Chaque Mois',
      factNumber: '3',
    },
  ];
  return (
    <>
      <Head>
        <title>A Propos - Web Waze Digital</title>
        <meta name="description" content="Découvrez qui nous sommes, notre histoire, notre équipe et notre engagement envers nos clients. Explorez notre page À propos pour en savoir plus sur Web Waze Digital." />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="A Propos"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="A Propos"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Le partenaire de confiance pour votre entreprise"
                subtitle="Notre Histoire"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  C'est le principal facteur qui nous distingue de nos concurrents et nous permet de fournir un service de conseil spécialisé aux entreprises. Notre équipe met à profit sa vaste expérience pour déterminer. Grâce à nos années d’expérience, nous avons également appris cela sur chaque canal.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/1.webp"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/2.webp"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/3.webp"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

        {/* Start Fun Fact Section */}
        <Div className="container">
          <FunFact
            title="Our fun fact"
            subtitle="Nous aimons partager notre passion pour le digital et la créativité avec nos clients."
            data={funfaceData}
          />
        </Div>
        {/* End Fun Fact Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/why-choose-us.webp"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Des personnes très expérimentées"
                subtitle="Pourquoi nous choisir"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  Vous optez pour une approche personnalisée et des solutions sur mesure adaptées à vos besoins. Nous nous engageons à vous accompagner à chaque étape de votre parcours numérique, en mettant à votre disposition notre expertise et notre passion pour le digital.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                  Notre équipe est composée de créatifs inspirés, de développeurs experts, de spécialistes du marketing et de gestionnaires de projets dévoués. Chacun apporte une expertise unique et une passion pour l'innovation
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
              title="Une Richesse d'Expérience et de Compétences."
              subtitle="Notre Équipe"
              variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
              title="Prêt à Transformer <br/>Votre Présence <i>Digitale</i> ?"
              btnText="Discutez avec Nous"
              btnLink="/contact"
              bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
