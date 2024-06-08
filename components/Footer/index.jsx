import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const date = new Date()
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/',
    },
    {
      title: 'Privacy Policy',
      href: '/',
    },
  ];

  const serviceMenu = [
    {
      title: 'UI/UX Design',
      href: '/service/service-details',
    },
    {
      title: 'Développement Web',
      href: '/service/service-details',
    },
    {
      title: 'Marketing Digital',
      href: '/service/service-details',
    },
    {
      title: 'Infographie',
      href: '/service/service-details',
    },
  ];
  const projects  = [
    {
      title: 'Wenshair',
      href: '/portfolio/wenshair',
    },
    {
      title: 'E-Food',
      href: '/portfolio/efood',
    },
    {
      title: 'Qui Monte à Bord',
      href: '/portfolio/quimonteabord',
    },
    {
      title: 'IP Address Tracker',
      href: '/portfolio/iptracker',
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  text="Contactez-nous dès aujourd'hui pour commencer à transformer vos idées en succès numérique."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={projects} menuHeading="Quelques Projets" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contactez Nous" />
              </Div>
            </Div>
            {/*<Div className="col-lg-3 col-sm-6">*/}
            {/*  <Div className="cs-footer_item">*/}
            {/*    <Newsletter*/}
            {/*      title="Subscribe"*/}
            {/*      subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."*/}
            {/*      placeholder="example@gmail.com"*/}
            {/*    />*/}
            {/*  </Div>*/}
            {/*</Div>*/}
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © {date.getFullYear()} Web Waze Digital.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <Div className="cs-copyright">Made with Love with Nextjs.</Div>
            {/*<MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />*/}
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
