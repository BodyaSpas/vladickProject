import './socialNetworkList.scss'
import { NetworkRoute } from '../../routes/socSieteRoute.ts'
import React from 'react';
import BonusImage from '../../images/cardBods.svg';

export default function SocialNetworkList() {
    return (
        <section className="socialNetworkList">
            <div className="container">
                <div className="socialNetworkList__content">
                    <h2 className="sectionTitle">
                        екстра бали
                    </h2>
                    <div className="section__descr">
                        <h3>Виконуй завдання</h3>
                        <p>переглянути все</p>
                    </div>
                    <div className="network__mainlist">
                        {NetworkRoute.map((item, index) => (
                            <div className='networkCard'>
                                <img src={item.buttonImage} alt={item.buttonValue} />
                                <p>{item.buttonText}</p>
                            </div>
                        ))}
                    </div>
                    <div className="takeBonusCard">
                        <img src={BonusImage} alt="click to take bonus" className="socialPonuka" />
                    </div>
                </div>
            </div>
        </section>
    );
}