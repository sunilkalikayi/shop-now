import React from 'react'
import HeroComp from '../components/heroComp/HeroComp'
import InformationComp from '../components/information section/InformationComp'
import Navbar from '../components/navbar/Navbar'
import NewArivals from '../components/new arivals/NewArivals'
import OffersComp from '../components/Offers/OffersComp'
import TopSellers from '../components/top sellers/TopSellers'

export default function HomaPage() {
  return (
    <div>
      <Navbar/>
      <HeroComp/>
      <NewArivals/>
      <InformationComp/>
      <OffersComp/>
      <TopSellers/>
    </div>
  )
}
