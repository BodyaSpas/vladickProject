import  React from 'react';
import Header from '../header/header.tsx';
import PartnersList from '../partnersList/partnersList.tsx';
import Offer from '../offer/offer.tsx';
import Recomendation from '../recomendation/recomendation.tsx';
import PopularProducts from '../popular/popular.tsx';
import Navigation from '../navigation/navigation.tsx';
import Ponuka from '../ponuka/ponuka.tsx';


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