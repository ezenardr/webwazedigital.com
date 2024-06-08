import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'Quelle est votre politique de tarification ?',
      answer: 'Nos tarifs varient en fonction des services demandés et de la complexité du projet. Nous proposons des forfaits préétablis ainsi que des solutions sur mesure pour répondre aux besoins spécifiques de chaque client. Contactez-nous pour obtenir un devis personnalisé pour votre projet.'
    },
    {
      question: 'Comment puis-je suivre les performances de mon site web ?',
      answer: 'Nous utilisons des outils d\'analyse web avancés pour suivre les performances de votre site web, y compris le trafic, les conversions, et les comportements des utilisateurs. Nous vous fournirons des rapports réguliers pour vous aider à comprendre comment votre site web fonctionne et à prendre des décisions éclairées pour l\'optimiser.'
    },
    {
      question: ' Quels sont les avantages du marketing digital pour mon entreprise ?',
      answer: 'Le marketing digital offre de nombreux avantages, notamment une plus grande visibilité en ligne, une meilleure audience ciblée, des résultats mesurables, et un retour sur investissement plus élevé par rapport aux méthodes traditionnelles de marketing. Notre équipe peut vous aider à élaborer une stratégie de marketing digital efficace pour atteindre vos objectifs commerciaux.'
    },
    {
      question: 'Comment puis-je commencer à travailler avec vous ?',
      answer: 'Pour commencer à travailler avec nous, il vous suffit de nous contacter via notre formulaire de contact ou par téléphone. Nous serons ravis de discuter de votre projet et de vous proposer des solutions adaptées à vos besoins.'
    },
    {
      question: 'Quels services proposez-vous ?',
      answer: 'Nous offrons une gamme complète de services digitaux, y compris la conception de sites web, le développement, la gestion des réseaux sociaux, le marketing digital, le référencement (SEO), et bien plus encore. Consultez notre page "Services" pour en savoir plus sur ce que nous proposons.'
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
