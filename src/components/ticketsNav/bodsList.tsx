import React from 'react';
import ProgressBar from './progressBar.jsx';
import CoinIMG from '../../images/coins.svg';
import GiftsList from '../giftsList/giftsList.tsx';
import SocialNetworkList from '../socialNetworkList/socialNetworkList.tsx';


export default function BodsList() {
    let bods = 278;
    let progress = Math.floor(bods / 10);
    return (
        <section className="BodsList">
            <div className="container">
                <div className="bods__content">
                    <div className="bods__title">
                        <div className="bods__stat">
                            <img src={CoinIMG} alt="coins" />
                            <h3>
                                {bods} БАЛІВ
                            </h3>
                        </div>
                        <div className="icon__clock">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_535_18248)">
                                    <path d="M10.0001 18.3337C5.39758 18.3337 1.66675 14.6028 1.66675 10.0003C1.66675 5.39783 5.39758 1.66699 10.0001 1.66699C14.6026 1.66699 18.3334 5.39783 18.3334 10.0003C18.3334 14.6028 14.6026 18.3337 10.0001 18.3337ZM10.0001 16.667C11.7682 16.667 13.4639 15.9646 14.7141 14.7144C15.9644 13.4641 16.6667 11.7684 16.6667 10.0003C16.6667 8.23222 15.9644 6.53652 14.7141 5.28628C13.4639 4.03604 11.7682 3.33366 10.0001 3.33366C8.23197 3.33366 6.53628 4.03604 5.28604 5.28628C4.03579 6.53652 3.33341 8.23222 3.33341 10.0003C3.33341 11.7684 4.03579 13.4641 5.28604 14.7144C6.53628 15.9646 8.23197 16.667 10.0001 16.667ZM10.8334 10.0003H14.1667V11.667H9.16675V5.83366H10.8334V10.0003Z" fill="#FE724C" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_535_18248">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <ProgressBar completed={progress} />
                    <ul className="bods__marks">
                        <li className="mark__item">0</li>
                        <li className="mark__item">200</li>
                        <li className="mark__item">400</li>
                        <li className="mark__item">600</li>
                        <li className="mark__item">800</li>
                        <li className="mark__item">1000</li>
                    </ul>
                    <GiftsList/>
                    <SocialNetworkList/>
                </div>
            </div>
        </section>
    )
}