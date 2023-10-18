import React from 'react';
import FakeData from '../../fakeData/ponuka.json';

export default function TicketsList() {

    const ponukaData = FakeData.ponuka;

    return (
        <section className='TicketsList'>
            <div className="container">
                <div className="ticketsList__content">
                    {ponukaData.map((item, key) => (
                        <div className={`ponuka__card ${item.bgc}`}>
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