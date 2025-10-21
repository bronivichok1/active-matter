import React, { useEffect, useState, cloneElement, useRef} from 'react';
import { Links, useNavigate } from 'react-router-dom';
import '../CSS/App.css';

function Header() {

  const navigate = useNavigate();

  const buttonNames = [
    { id: 10, title: 'Главная' },
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
  
  return(

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

  )
}
export default Header