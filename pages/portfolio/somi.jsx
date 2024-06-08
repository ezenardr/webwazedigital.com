import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';

export default function page() {
    const project =
        {
            id: "4",
            category : "Site Internet",
            title : "SOMI Haiti",
            description1: "Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
            description2 : "Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
            stack : "NextJS, TailwindCSS",
            src:'/images/somi.webp'
        }
    return (
        <>
            <Head>
                <title>Portfolio - {project.title} </title>
                <meta name="description" content={project.description1} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <PageHeading
                    title="Portfolio Details"
                    bgSrc="/images/service_hero_bg.jpeg"
                    pageLinkText={project.title}
                />
                <Spacing lg="150" md="80" />
                <Div className="container">
                    <img
                        src={project.src}
                        alt={project.title}
                        className="cs-radius_15 w-100"
                    />
                    <Spacing lg="90" md="40" />
                    <Div className="row">
                        <Div className="col-lg-6">
                            <SectionHeading title={project.title} subtitle={project.category}>
                                <Spacing lg="40" md="20" />
                                <p>
                                    {project.description1}
                                </p>
                                <Spacing lg="10" md="10" />
                                <p>
                                    {project.description2}
                                </p>
                            </SectionHeading>
                        </Div>
                        <Div className="col-lg-5 offset-lg-1">
                            <Spacing lg="60" md="40" />
                            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Informations -</h2>
                            <Spacing lg="50" md="30" />
                            <Div className="row">
                                <Div className="col-6">
                                    <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                                        Category:
                                    </h3>
                                    <p className="cs-m0">{project.category}</p>
                                    <Spacing lg="30" md="30" />
                                </Div>
                                {/*<Div className="col-6">*/}
                                {/*  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">*/}
                                {/*    Location:*/}
                                {/*  </h3>*/}
                                {/*  <p className="cs-m0">United Kindom</p>*/}
                                {/*  <Spacing lg="30" md="30" />*/}
                                {/*</Div>*/}
                                <Div className="col-6">
                                    <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                                        Software:
                                    </h3>
                                    <p className="cs-m0">{project.stack}</p>
                                    <Spacing lg="30" md="30" />
                                </Div>
                                {/*<Div className="col-6">*/}
                                {/*  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">*/}
                                {/*    Dated:*/}
                                {/*  </h3>*/}
                                {/*  <p className="cs-m0">14-Aug-2022</p>*/}
                                {/*  <Spacing lg="30" md="30" />*/}
                                {/*</Div>*/}
                                {/*<Div className="col-6">*/}
                                {/*  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">*/}
                                {/*    Client:*/}
                                {/*  </h3>*/}
                                {/*  <p className="cs-m0">Andreo Bowla</p>*/}
                                {/*  <Spacing lg="30" md="30" />*/}
                                {/*</Div>*/}
                            </Div>
                        </Div>
                    </Div>
                    <Spacing lg="65" md="10" />
                </Div>
                <Spacing lg="145" md="80" />
                <Cta
                    title="contact@webwazedigital.com"
                    bgSrc="/images/cta_bg_2.jpeg"
                    variant="rounded-0"
                />
            </Layout>
        </>
    );
}

