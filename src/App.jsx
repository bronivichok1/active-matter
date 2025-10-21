import React, { useEffect, useState, cloneElement, useRef} from 'react';
import { Links, useNavigate } from 'react-router-dom';
import './CSS/App.css';

function App() {

  const navigate = useNavigate();

  const buttonNames = [
    { id: 0, title: 'Карты' },
    { id: 1, title: 'Магазин' },
    { id: 2, title: 'Поддержка' },
    { id: 3, title: 'Системные требования' },
    { id: 4, title: 'Таблица патронов' },
    { id: 5, title: 'Новости' },
    { id: 6, title: 'Тир-листы' },
    { id: 7, title: 'Предметы' },
    { id: 8, title: 'Карта квестов' },
    { id: 9, title: 'Мерч' },
  ];

  const buttonMapsNames = [
    { id: 0, title: 'Щегольское', format: 'jpg' },
    { id: 1, title: 'Щегольское: Буйные заросли', format: 'webp' },
    { id: 2, title: 'Озерное', format: 'jpg' },
    { id: 3, title: 'Грузовой порт', format: 'webp' },
    { id: 4, title: 'Военная база: Безмолвные', format: 'jpg' },
    { id: 5, title: 'Штаб', format: 'png' },
    { id: 6, title: 'Завод: Улей', format: 'webp' },
  ];

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
  
  const headerButtonRender = (buttons) => {
    return buttons.map((button) => (
      <button
        key={button.id}
        onClick={() => navigate(`/${button.id}`)}
        className="button-header"
      >
        {button.title}
      </button>
    ));
  };

  const headerButtonMapsRender = (buttons) => {
    return buttons.map((button) => (
      <button key={button.id} className="button-header">
        {button.title}
      </button>
    ));
  };

  const Carousel = (maps) => {
    return maps.map((map) => (
      <div
        key={map.id}
        className="carousel"
        style={{ backgroundImage: `url(/mapsPred/map${map.id}.${map.format})` }}
      >
        <h3>{map.title}</h3>
      </div>
    ));
  };

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
