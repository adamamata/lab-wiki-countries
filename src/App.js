import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import data from './countries.json';
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {

  const [countries, setCountries] = useState(data);

  return (  
  <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<CountriesList countries={countries}/>}/>
      <Route path='/:countryId' element={<CountryDetails countries={countries}/>}/>
    </Routes>
  </div>
  );
}

export default App;