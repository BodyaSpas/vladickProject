import React from 'react';
import FakeData from '../../fakeData/giftData.json';
import './giftList.scss';


export default function GiftsList() {
    const data = FakeData.recomendation;

    return (
        <section className="giftList">
            <div className="container">
                <div className="giftList__content">
                    <h2 className="sectionTitle">
                        Нагороди
                    </h2>
                    <div className="section__descr">
                        <h3>200 балів</h3>
                        <p>знижка або подарунок</p>
                    </div>
                    <div className="mainList">
                        {data.map((item, index) => (
                            <div key={index} className="gift__card">
                                <img className="gift__illustration" src={item.image} alt={item.product} />
                                <h3>
                                    {item.product}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}