import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({countries}) {
    return (
        <div className='countries-list'>
            {countries.map(country => {
                return ( 
                    <div className='container'>
                        <div className='row'>
                            <Link to={`/${country.alpha3Code.toLowerCase()}`}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'/>
                            </Link>   
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList