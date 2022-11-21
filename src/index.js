import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/home';
import DetailsMovies from './pages/details_movies_series';
import DetailsCast from './pages/details_cast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DetailsMovies/:id' element={<DetailsMovies/>}/>
        <Route path='/DetailsMovies/:id' element={<DetailsMovies/>}/>
        <Route path='/DetailsCast/:id' element={<DetailsCast/>}/>
    </Routes>
  </BrowserRouter>
);

