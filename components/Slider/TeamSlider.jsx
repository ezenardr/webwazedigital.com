import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/ezenardr.webp',
      memberName: 'Rodolphe Ezenard',
      memberDesignation: 'Co-Fondateur - CEO',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/ezenardr',
        twitter: 'https://x.com/ezenardr',
        // youtube: '/',
        facebook: 'https://web.facebook.com/rodolphe.ezenard/',
      },
    },
    {
      memberImage: '/images/JOOO.jpg',
      memberName: 'Jean-Olivier Koulibaly',
      memberDesignation: 'Co-Fondateur',
      memberSocial: {
        linkedin: '/',
        twitter: 'https://x.com/jeanolivier_dev',
        // youtube: '/',
        facebook: 'https://www.facebook.com/kjeanolivier/',
      },
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}  className="cs-gap-24 cs-arrow_style2">
        {teamData.map((item, index) => (
            <Div key={index}>
              <Team
                  memberImage={item.memberImage}
                  memberName={item.memberName}
                  memberDesignation={item.memberDesignation}
                  memberSocial={item.memberSocial}
              />
            </Div>
        ))}
    </Slider>
  );
}
