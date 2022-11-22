import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/home';
import DetailsMovies from './pages/details_movies';
import DetailsTv from './pages/details_series';
import DetailsCast from './pages/details_cast';
import Movies from './pages/movies';
import Series from './pages/series';
import Persons from './pages/persons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DetailsMovies/:id' element={<DetailsMovies/>}/>
        <Route path='/DetailsTv/:id' element={<DetailsTv/>}/>
        <Route path='/DetailsCast/:id' element={<DetailsCast/>}/>
        <Route path='/Movies/' element={<Movies/>}/>
        <Route path='/Series/' element={<Series/>}/>
        <Route path='/Persons/' element={<Persons/>}/>

    </Routes>
  </BrowserRouter>
);

