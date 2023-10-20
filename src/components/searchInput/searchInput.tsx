import React from 'react';
import './searchInput.scss';

export default function SearchInput(){
    return(
        <section className="searchInput">
            <div className="container">
                <div className="search__content">
                    <label htmlFor='searchProduct'>ПОШУК</label>
                    <input type="text" name="search" id="searchProduct" placeholder='Кухня\страва' />
                </div>
            </div>
        </section>
    );
}