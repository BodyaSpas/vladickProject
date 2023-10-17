import  React from 'react';
import Header from '../../components/header/header.tsx';
import PartnersList from '../../components/partnersList/partnersList.tsx';
import Offer from '../../components/offer/offer.tsx';
import Recomendation from '../../components/recomendation/recomendation.tsx';
import PopularProducts from '../../components/popular/popular.tsx';
import Navigation from '../../components/navigation/navigation.tsx';
import Ponuka from '../../components/ponuka/ponuka.tsx';


export default function HomePage() {

    return (
        <>
            <Header/>
            <PartnersList/>
            <Offer/>
            <Recomendation/>
            <Ponuka/>
            <PopularProducts/>
            <Navigation/>
        </>
    )
}