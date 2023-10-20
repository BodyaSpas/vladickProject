import React from 'react';
import { SearchButtonsRoute } from '../../routes/searchButtons.ts';
import './searchButtons.scss';

interface IProps{
    button: ISearchButton;
    handleFilter: (buttonValue:any) => void;
    setActive: () => void;
    isActive: boolean;
}



export default function SearchButton(props: IProps) {
    const {buttonText, buttonValue} = props.button;

    const handleSetBlogs = () => {
      props.setActive();
      props.handleFilter(buttonValue);
    }
        return (
            <button className={`blogList__button ${props.isActive ? 'active' : ''}`} onClick={handleSetBlogs}>
                {buttonText}
            </button>
        )
    }