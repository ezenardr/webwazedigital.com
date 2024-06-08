import React from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-4">
            <PricingTable 
              title='Présence en Ligne'
              price='29'
              currency='$'
              timeline='monthly'
              features={['Site Web responsive', 'Optimisation Complète', 'Réseaux Sociaux', 'Formulaire de Contact', 'Analyse du Trafic', 'Support Continu']}
              btnText='Purchase Now'
              btnLink='/'
            />
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
            <PricingTable 
              title='Wordpress/Shopify'
              price='199'
              currency='$'
              timeline='monthly'
              features={['Installation et Configuration de la Plateforme', 'Design Professionnel et Personnalisé', 'Intégration de Produits', 'Optimisation pour le Référencement (SEO)', 'Gestion des Commandes et des Stocks', 'Intégration des Réseaux Sociaux ','Formation et Support Technique']}
              btnText='Purchase Now'
              btnLink='/'
            />
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
            <PricingTable 
              title='Marketing Digital'
              price='299'
              currency='$'
              timeline='monthly'
              features={['Audit de la Présence en Ligne', 'Définition des Objectifs et des KPI', 'Élaboration de Stratégies Multi-Canal', 'Création de Contenu Engageant', 'Campagnes Publicitaires Ciblées', 'Suivi et Analyse des Performances','Consultation et Support Continu']}
              btnText='Purchase Now'
              btnLink='/'
            />
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
