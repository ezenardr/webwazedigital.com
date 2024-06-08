import Head from 'next/head';
import React from 'react';
import Card from '../../components/Card';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import PricingTableList from '../../components/PricingTable/PricingTableList';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Spacing from '../../components/Spacing';

export default function Service() {
  return (
    <>
      <Head>
        <title>Service - Web Waze Digital</title>
        <meta name="description" content="Découvrez nos services sur mesure, conçus pour propulser votre entreprise vers de nouveaux sommets dans le monde digital." />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Layout>
        <PageHeading
          title="Services"
          bgSrc="images/service_hero_bg.jpeg"
          pageLinkText="Services"
        />
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Expertises et Services"
                  subtitle="Votre Succès Digital"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                        title="UI/UX design"
                        link="/service"
                        src="/images/ux.webp"
                        alt="UI/UX design"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                        title="Website Development"
                        link="/service"
                        src="/images/website.webp"
                        alt="Website Development"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                        title="Digital Marketing"
                        link="/service"
                        src="/images/marketing.webp"
                        alt="Digital Marketing"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                        title="Infographie"
                        link="/service"
                        src="/images/infography.webp"
                        alt="Infographie"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="SEO"
                      link="/service/consultancy"
                      src="/images/seo.webp"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Wordpress  Shopify"
                      link="/service/creative-design"
                      src="/images/wp.webp"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <SectionHeading
            title="Transformer vos idées<br/> en succès en ligne."
            subtitle="Nos Formules"
          />
          <Spacing lg="85" md="40" />
          <PricingTableList />
        </Div>
        <Spacing lg="125" md="55" />
        <TestimonialSlider />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
              title="Prêt à Transformer <br/>Votre Présence <i>Digitale</i> ?"
              btnText="Discutez avec Nous"
              btnLink="/contact"
              bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
