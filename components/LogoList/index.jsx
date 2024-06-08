import React from 'react';
import Div from '../Div';
import Image from "next/image";

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/logo-efood-monochrome.png',
      alt: 'E food monochrome',
    },
    {
      src: '/images/logo-somi-mono.png',
      alt: 'Somi Haiti',
    },
    {
      src: "/images/logo-men's-hair-mono.png",
      alt: 'Wenshair',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt}  />
        </div>
      ))}
    </Div>
  );
}
