import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Wenshair Premium Barbershop',
      // subtitle:'V',
      href:'/portfolio/wenshair',
      src:'/images/wenshair.webp'
    },
    {
      title:'Somi Haiti',
      // subtitle:'See Details',
      href:'/portfolio/somi',
      src:'/images/somi.webp'
    },
    {
      title:'E-Food Platform',
      // subtitle:'See Details',
      href:'/portfolio/efood',
      src:'/images/efood.webp'
    },
    {
      title:'IP Address Tracker',
      // subtitle:'See Details',
      href:'/portfolio/iptracker',
      src:'/images/iptracker.webp'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
