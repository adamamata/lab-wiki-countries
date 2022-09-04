import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountriesList({countries}) {

    const apiUrl = 'https://ih-countries-api.herokuapp.com/countries';

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            const apiData = response.data;
            setData(apiData);
        }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='countries-list'>
            {data.map(country => {
                return ( 
                    <div className='container' key={country.alpha3Code}>
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