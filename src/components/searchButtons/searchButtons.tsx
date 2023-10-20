import React from 'react';
import { SearchButtonsRoute } from '../../routes/searchButtons.ts';
import './searchButtons.scss';
import SearchButton from './searchButton.tsx';


interface IProps{
    setFoundBlogs: (foundBlogs:any) => void;
    handleFilter: (buttonValue:any) => void;
}


export default function SearchButtons(props:IProps) {
    const [isActiveButtons, setActiveButtons] = React.useState(SearchButtonsRoute.map((_, index) => index === 0 ? true : false));

    const setActive = (index: number) => {
        const activeButtons = SearchButtonsRoute.map(() => false);
        activeButtons[index] = true;
        setActiveButtons(activeButtons)
        console.log(index);
    }

    return (
        <section className="ButtonsList">
            <div className="container">
                <div className="buttonList__content">
                    <div className="list__title">
                        <h3>КАТЕГОРІЇ</h3>
                    </div>
                    <ul className="buttonList__main">
                        {SearchButtonsRoute.map((item, index) => (
                            <SearchButton key={index} setActive={() => setActive(index)} isActive={isActiveButtons[index]} handleFilter={props.handleFilter} button={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}