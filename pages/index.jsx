import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/webwazedigital/',
    },
    {
      name: 'Facebook',
      links: 'https://www.facebook.com/webwazedigital/',
    },
  ];

  // FunFact Data
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
      <title>Web Waze Digital</title>
      <meta name="description" content="Renforcez votre présence en ligne avec nos services complets de conception web, de développement et de gestion des réseaux sociaux. Des solutions sur mesure pour valoriser votre marque et engager efficacement votre public." />
      <link rel="icon"  href="/favicon.png" />
    </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="Nous vous aidons à conquérir le Monde Digital"
          subtitle="La meilleure solution de résolution de problèmes à nos clients et les meilleurs produits de finition dans le futur présent et futur."
          btnText="Passez à l'action"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Suivez nous"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpeg"
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Saviez-vous que"
            subtitle="Nous aimons partager notre passion pour le digital et la créativité avec nos clients."
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Nos Compétences à Votre Service"
                  subtitle="Ce Que Nous Faisons"
                  btnText="Voir tous les services"
                  btnLink="/service"
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
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Explorez quelques-uns de nos projets marquants."
              subtitle="Projets Récents"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div>
        {/* End Portfolio Section */}

        {/* Start Awards Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Votre Succès Digital"
                  subtitle="Expertises et Services"
                  variant="cs-style1"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <TimelineSlider />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Notre méthode nous permet de nous adapter rapidement aux besoins changeants de nos clients.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=SANl8SMBIwU"
            bgUrl="/images/video_bd.webp"
          />
        </Div>
        {/* End Video Block Section */}

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
        <Spacing lg="150" md="80" />
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        {/*<Spacing lg="150" md="80" />*/}
        {/*<Div className="cs-shape_wrap_4">*/}
        {/*  <Div className="cs-shape_4"></Div>*/}
        {/*  <Div className="cs-shape_4"></Div>*/}
        {/*  <Div className="container">*/}
        {/*    <Div className="row">*/}
        {/*      <Div className="col-xl-4">*/}
        {/*        <SectionHeading*/}
        {/*          title="Explore recent publication"*/}
        {/*          subtitle="Our Blog"*/}
        {/*          btnText="View More Blog"*/}
        {/*          btnLink="/blog"*/}
        {/*        />*/}
        {/*        <Spacing lg="90" md="45" />*/}
        {/*      </Div>*/}
        {/*      <Div className="col-xl-7 offset-xl-1">*/}
        {/*        <Div className="cs-half_of_full_width">*/}
        {/*          <PostSlider />*/}
        {/*        </Div>*/}
        {/*      </Div>*/}
        {/*    </Div>*/}
        {/*  </Div>*/}
        {/*</Div>*/}
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Nos partenaires mondiaux réputés" />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
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
