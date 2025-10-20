import React, { useEffect, useState, cloneElement, useRef} from 'react';
import { Links, useNavigate } from 'react-router-dom';
import './CSS/App.css';

function App() {

  const navigate = useNavigate();

  const buttonNames = {
    "0":'Карты',
    "1":'Магазин',
    "2":'Поддержка',
    "3":'Системные требования',
    "4":'Таблица патронов',
    "5":'Новости',
    "6":'Тир-листы',
    "7":'Важные-предметы',
    "8":'Карта квестов',
    "9":'Мерч',
  }
  const buttonMapsNames = {
    "0":'Щегольское',
    "1":'Щегольское: Буйные заросли',
    "2":'Озерное',
    "3":'Грузовой порт',
    "4":'Военная база: Безмолвные',
    "5":'Штаб',
    "6":'Завод: Улей',
  }

  const buttonDangerMapsNames = {
    "1":'Щегольское: Буйные заросли',
    "3":'Побег из Догорска',
    "4":'Военная база: Нестабильная зона',
    "5":'Штаб: Нестабильная зона',
    "6":'Свалка: Полночь',
  }


  const headerButton = (label, number) => (
    <button key={label} onClick={() => navigate(`/${number}`)} className="button-header">
      {label}
    </button>
  );

  const headerButtonMaps = (label, style) => (
    <button  key={label}  className={style}>
      {label} 
    </button>
  );
  
  const headerButtonRender = (buttonNames) => {

    return Object.keys(buttonNames)
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => headerButton(buttonNames[key],key));
  };

  const headerButtonMapsRender = (buttonNames, style) => {

    return Object.keys(buttonNames)
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => headerButtonMaps(buttonNames[key], style));
  };

  const Carousel = (maps) => {
      return Object.keys(maps).map((key) => <div className='carousel'>
            {maps[key]}
            </div>) 
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            {headerButtonRender(buttonNames)}

            <select className="select-language" name="pets">
              <option value="ru">RU</option>
              <option value="eng">ENG</option>
            </select>
          </div>
        </div>
     {/*<div>
          {headerButtonMapsRender(buttonMapsNames,"button-header")}
        </div>
        <div>
          {headerButtonMapsRender(buttonDangerMapsNames,"button-header")}
        </div>*/}
      </header>
      <div className='container'>
        <div className='carousel-container'>
          {Carousel(buttonMapsNames)}
          {Carousel(buttonMapsNames)}
        </div>
        <div aria-hidden='true' className='carousel-container'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
