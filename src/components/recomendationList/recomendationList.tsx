import React from 'react';
import { useLocation } from 'react-router-dom';
import FakeData from '../../fakeData/recomendation.json';
import './recomendationList.scss';




export default function RecomendationList() {
    const data = FakeData.recomendation;
    const renderedDescription = data.slice(0, 30);



    return (
        <section className="recomendationList">
            <div className="container">
                <div className="recomendation__content">
                    <h2 className='sectionTitle'>
                        Рекомендовані товари
                    </h2>
                    <div className="recomendation__list">
                        {data.map((item, key) => (
                            <div key={key} className="recomend__card">
                                <div className="card__details">
                                    <h3>{item.product}</h3>
                                    <h4>{item.price}</h4>
                                    <p>{item.description.slice(0,50)}...</p>
                                </div>
                                <div className="card__illustration">
                                    <img src={item.image} alt={item.product} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn_cart">В КОШИК</button>
                </div>
            </div>
        </section>
    )
}