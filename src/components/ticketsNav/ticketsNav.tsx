import React from 'react';
import { TicketsRoute } from '../../routes/ticketsNav.ts';
import TicketsNavButton from './ticketsNavButton.tsx';
import { Link } from 'react-router-dom';


interface IProps {
    setContent: (value: any) => void;
}

export default function TicketsNavigation(props: IProps) {
    const [isActiveButton, setActiveButton] = React.useState(TicketsRoute.map((_, index) => index === 0 ? true : false));

    const setActive = (index: number) => {
        const activeButtons = TicketsRoute.map(() => false);
        activeButtons[index] = true;
        setActiveButton(activeButtons);
    }


    return (
        <section className="tickets">
            <div className="container">
                <div className="nav__content">
                    <button className="arr_back">
                        <Link to={{ pathname: `/` }}  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_305_4429)">
                                <path d="M9.02329 9.99962L13.1483 14.1246L11.97 15.303L6.66663 9.99962L11.97 4.69629L13.1483 5.87462L9.02329 9.99962Z" fill="#3E3E3D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_305_4429">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></Link>
                    </button>
                    <div className="tickets__nav">
                        {TicketsRoute.map((button, index) => (
                            <TicketsNavButton key={index} setContent={props.setContent} isActiveButton={isActiveButton[index]} setActive={() => setActive(index)} button={button} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}