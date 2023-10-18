import  React from 'react';
import {TicketsRoute} from '../../routes/ticketsNav.ts'


interface IProps{
    button: ITicketsRoute;
    setActive: () => void;
    isActiveButton:boolean;
    setContent: (value:any) => void;
}

export default function TicketsNavButton(props:IProps) {
    const handleSetActiveButton = () => {
        props.setActive();
        props.setContent(props.button.buttonValue);
      }



    return (
        <button onClick={handleSetActiveButton} className={`tickets__button ${props.isActiveButton ? 'activeButton' : ''}`}>
            {props.button.buttonText}
        </button>
    )
}