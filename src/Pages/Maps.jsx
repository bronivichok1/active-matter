import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AllPage.css';
import Header from '../Components/Header';

function Maps() {
  const navigate = useNavigate();
  const MapsArray = [
    { id: 0, title: 'Щегольское', format: 'jpg', name:'zavod' },
    { id: 1, title: 'Свалка: Полночь', format: 'jpg', name:'zavod' },
    { id: 2, title: 'Озерное', format: 'jpg', name:'zavod' },
    { id: 3, title: 'Грузовой порт', format: 'png', name:'zavod' },
    { id: 4, title: 'Военная база: Безмолвные', format: 'jpg', name:'zavod' },
    { id: 5, title: 'Штаб', format: 'jpg', name:'shtab' },
    { id: 6, title: 'Завод: Улей', format: 'png', name:'zavod' },
  ];

  const handleCardClick = (name) => {

  navigate(`/maps/` + name); 
  };


  return (
    <div className='maps-fon'>
        <Header/>
        <div className="maps-container">
        {MapsArray.map((map) => (
            <div
            key={map.id}
            className="map-card"
            style={{ backgroundImage: `url(/maps/map${map.id}.${map.format})` }}
            onClick={() => handleCardClick(map.name)}
            >
            <h3>{map.title}</h3>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Maps;