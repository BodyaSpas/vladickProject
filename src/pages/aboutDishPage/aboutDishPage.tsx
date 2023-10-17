import  React from 'react';
import { useLocation } from 'react-router-dom';
import FakeData from '../../fakeData/recomendation.json';
import AboutDish from '../../components/aboutDish/aboutDish.tsx';
import Offer from '../../components/offer/offer.tsx'
import RecomendationList from '../../components/recomendationList/recomendationList.tsx';
import Navigation from '../../components/navigation/navigation.tsx';




export default function AboutDishPage() {
    const data = FakeData.recomendation;


    const location = useLocation();
    const url = location.pathname;
    const splitURL = url.split('/');
    const productID = Number(splitURL[2]);
    const currentProduct  = data.find((product) => product.id === productID);


    return (
        <>
            <AboutDish products={currentProduct!}/>
            <Offer/>
            <RecomendationList/>
            <Navigation/>
        </>
    )
}