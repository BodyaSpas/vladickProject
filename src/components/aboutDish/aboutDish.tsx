import React from 'react';
import { Link } from 'react-router-dom';
import FakeData from '../../fakeData/recomendation.json';
import './aboutDish.scss';

interface IProps {
    products: IProduct;
}



export default function AboutDish(props: IProps) {

    return (
        <section className="aboutDish">
            <div className="container">
                <div className="aboutDish__content">
                    <button className="arr_back">
                    <Link to={{pathname:`/`}}  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_305_4429)">
                                <path d="M9.02329 9.99962L13.1483 14.1246L11.97 15.303L6.66663 9.99962L11.97 4.69629L13.1483 5.87462L9.02329 9.99962Z" fill="#3E3E3D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_305_4429">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></Link>
                    </button>
                    <div className="dish_Illustration">
                        <img src={props.products.image} alt={props.products.product} />
                    </div>
                    <div className="dish_description">
                        <h2 className="dish_name">
                            {props.products.product}
                        </h2>
                        <h3 className="dish_type">
                            {props.products.type}
                        </h3>
                        <p className="dish_descr">
                            {props.products.description}
                        </p>
                    </div>
                    <div className="dish__options">
                        <div className="function__option">
                            <h3>КІЛЬКІСТЬ</h3>
                            <div className="add__option">
                                <div className="result">
                                    <p>1</p>
                                </div>
                                <div className="funct__options">
                                    <button className="option">
                                        -
                                    </button>
                                    <button className="option">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <h3>SUB TOTAL</h3>
                            <p>$ {props.products.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}