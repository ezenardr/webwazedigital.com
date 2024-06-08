import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import Image from "next/image";
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'Travailler avec Web Waze Digital a transformé notre présence en ligne. Leur expertise en développement de sites web et en marketing digital a permis à notre entreprise de se démarquer dans un marché compétitif. Nous sommes ravis des résultats et recommandons vivement leurs services.',
      avatarName: 'Rose Gilène Clotaire',
      avatarDesignation: 'Responsable en charge de Somi Haiti',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'Grâce à Web Waze Digital, notre boutique Shopify a vu une augmentation significative du trafic et des ventes. Leur équipe est professionnelle, réactive et toujours prête à proposer des solutions innovantes.',
      avatarName: 'Jean Martin',
      avatarDesignation: 'CEO de Cia Crochet',
      ratings: '5',
    },{
      testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'Travailler avec Web Waze Digital a été une expérience exceptionnelle. Leur équipe a parfaitement compris nos besoins et a su créer un site web élégant et fonctionnel qui reflète l\'identité de Wenshair Barbershop.',
      avatarName: 'Kerwens Telisme',
      avatarDesignation: 'CEO de Wenshair Barbershop',
      ratings: '5',
    },
  ];
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
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Image src={"/images/testimonial.jpeg"} alt={"testimonial image"} width={500} height={100} className={"testimo"} />
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
