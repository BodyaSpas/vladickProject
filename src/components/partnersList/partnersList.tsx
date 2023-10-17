import React from 'react';
import { Link } from 'react-router-dom';
import partnersListData from '../../fakeData/partnersList.json';
import './partnersList.scss';






export default function PartnersList() {
    const partners = partnersListData.partners
    return (
        <section className="partners__list">
            <div className="container">
                <div className="partners__listContent">
                    <h2 className='sectionTitle'>Заклади / супермаркети</h2>
                    <div className="main__list">
                        {partners.map((item, id) => (
                            <div className="item_card">
                                <img className='partner_logo' src={item.image} alt={item.partner} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}