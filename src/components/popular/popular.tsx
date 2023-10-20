import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/recomendation.json';
import './popular.scss';






export default function Recomendation() {
    const recomendationList = fakeData.recomendation;

    return (
        <section className="recomendation">
            <div className="container">
                <div className="rec__content">
                    <h2 className='sectionTitle'>Рекомендовано для вас</h2>
                    <div className="recomendation__list">
                        {recomendationList.slice(0,4).map((item, id) => (
                            <button key={id} className="item_card">
                                <div className="item__illustration">
                                    <img src={item.image} alt={item.product} />
                                </div>
                                <div className="item__details">
                                    <h3 className="item_name">
                                        {item.product}
                                    </h3>
                                    <div className="item__descr">
                                        <h3 className='item__price'>$ {item.price}</h3>
                                        <div className="buy__item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                <path d="M10.5245 0.578125L12.9327 4.74962H15.5V6.24962H14.6248L14.057 13.0619C14.0414 13.2493 13.9559 13.424 13.8176 13.5514C13.6792 13.6788 13.4981 13.7495 13.31 13.7496H2.69C2.50193 13.7495 2.32077 13.6788 2.18242 13.5514C2.04406 13.424 1.95861 13.2493 1.943 13.0619L1.3745 6.24962H0.5V4.74962H3.0665L5.4755 0.578125L6.7745 1.32813L4.799 4.74962H11.2003L9.2255 1.32813L10.5245 0.578125ZM13.1195 6.24962H2.87975L3.38 12.2496H12.6193L13.1195 6.24962ZM8.75 7.74962V10.7496H7.25V7.74962H8.75ZM5.75 7.74962V10.7496H4.25V7.74962H5.75ZM11.75 7.74962V10.7496H10.25V7.74962H11.75Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}