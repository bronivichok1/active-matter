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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/0' element={<Maps/>}/>
      <Route path='/1' element={<Items/>}/>
      <Route path='/2' element={<HelpPage/>}/>
      <Route path='/3' element={<Table/>}/>
      <Route path='/4' element={<Items/>}/>
      <Route path='/5' element={<Items/>}/>
      <Route path='/6' element={<Items/>}/>
      <Route path='/7' element={<Items/>}/>
      <Route path='/8' element={<Items/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
