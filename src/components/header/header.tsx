import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';



export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <h2 className="header_nickname">Привіт, АННА!</h2>
                    <button className="nav__button">
                        Дім
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_305_4119)">
                                <path d="M10 19.7736L4.69667 14.4703C3.64779 13.4214 2.93349 12.085 2.64411 10.6301C2.35473 9.17528 2.50326 7.66729 3.07092 6.29685C3.63858 4.9264 4.59987 3.75507 5.83324 2.93096C7.0666 2.10686 8.51665 1.66699 10 1.66699C11.4834 1.66699 12.9334 2.10686 14.1668 2.93096C15.4001 3.75507 16.3614 4.9264 16.9291 6.29685C17.4967 7.66729 17.6453 9.17528 17.3559 10.6301C17.0665 12.085 16.3522 13.4214 15.3033 14.4703L10 19.7736ZM14.125 13.2919C14.9407 12.4761 15.4963 11.4367 15.7213 10.3052C15.9463 9.17362 15.8308 8.00076 15.3892 6.93489C14.9477 5.86902 14.2 4.95802 13.2408 4.31707C12.2815 3.67612 11.1537 3.33401 10 3.33401C8.8463 3.33401 7.71851 3.67612 6.75924 4.31707C5.79996 4.95802 5.05229 5.86902 4.61076 6.93489C4.16923 8.00076 4.05368 9.17362 4.27871 10.3052C4.50374 11.4367 5.05926 12.4761 5.875 13.2919L10 17.4169L14.125 13.2919ZM10 10.8336C9.55797 10.8336 9.13405 10.658 8.82149 10.3454C8.50893 10.0329 8.33334 9.60896 8.33334 9.16693C8.33334 8.7249 8.50893 8.30098 8.82149 7.98842C9.13405 7.67586 9.55797 7.50026 10 7.50026C10.442 7.50026 10.866 7.67586 11.1785 7.98842C11.4911 8.30098 11.6667 8.7249 11.6667 9.16693C11.6667 9.60896 11.4911 10.0329 11.1785 10.3454C10.866 10.658 10.442 10.8336 10 10.8336Z" fill="#FE724C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_305_4119">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}