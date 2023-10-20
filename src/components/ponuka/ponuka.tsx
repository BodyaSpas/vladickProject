import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/ponuka.json';
import './ponuka.scss';






export default function Ponuka() {

    const ponukaData = fakeData.ponuka;

    return (
        <section className="ponuka">
            <div className="container">
                <div className="ponuka__content">
                <h2 className='sectionTitle'>Вигідні пропозиції</h2>
                {ponukaData.map((item, key) => (
                    <div key={key} className={`ponuka__card ${item.bgc}`}>
                        <div className="card__description">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className="card__illustration">
                            <img src={item.image} alt="ponuka" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}