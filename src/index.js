import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import Items from './Pages/Items';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Maps from './Pages/Maps';
import HelpPage from './Pages/HelpPage';
import Table from './Pages/Table';
import System from './Pages/System';
import ErrorPage from './Pages/ErrorPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App/>}/>
      <Route path='/0' element={<Maps/>}/>
      <Route path='/1' element={<ErrorPage/>}/>
      <Route path='/2' element={<ErrorPage/>}/>
      <Route path='/3' element={<System/>}/>
      <Route path='/4' element={<ErrorPage/>}/>
      <Route path='/5' element={<ErrorPage/>}/>
      <Route path='/6' element={<ErrorPage/>}/>
      <Route path='/7' element={<Items/>}/>
      <Route path='/8' element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
