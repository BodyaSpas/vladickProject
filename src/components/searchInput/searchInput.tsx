import React, { useState } from 'react';

import './searchInput.scss';

interface IProps {
    setInputValue: (e:any) => void;
    inputValue:string;
    handleFilter: (buttonValue:any) => void;
}

export default function SearchInput(props: IProps) {

    const [inputValue, setInputValue] = useState(''); // Initialize with an empty string
    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
          // Handle the Enter key press here, for example, update the state
          console.log('Enter key pressed');
          console.log(inputValue);
          props.setInputValue(event.target.value);
        }
      };
    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);

        console.log(inputValue);
    };

    return (
        <section className="searchInput">
            <div className="container">
                <div className="search__content">
                    <label htmlFor='searchProduct'>ПОШУК</label>
                    <input type="text" name="search" id="searchProduct" placeholder='Кухня\страва' value={inputValue} onChange={handleInputChange}onKeyDown={handleKeyDown} />
                </div>
            </div>
        </section>
    );
}