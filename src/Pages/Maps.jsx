import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AllPage.css';

function Maps() {
  const navigate = useNavigate();
  const link = '../Image/maps/map'
  const MapsArray = [
    { id: 0, title: 'Щегольское', format: 'jpg' },
    { id: 1, title: 'Щегольское: Буйные заросли', format: 'jpg' },
    { id: 2, title: 'Озерное', format: 'jpg' },
    { id: 3, title: 'Грузовой порт', format: 'png' },
    { id: 4, title: 'Военная база: Безмолвные', format: 'jpg' },
    { id: 5, title: 'Штаб', format: 'jpg' },
    { id: 6, title: 'Завод: Улей', format: 'png' },
  ];

  const handleCardClick = (id) => {
    console.log(`Карточка с id ${id} была нажата`);
    // Здесь можно добавить логику перехода на другую страницу
    // navigate(`/map/${id}`); // Пример использования навигации
  };


  return (
    <div className="maps-container">
      {MapsArray.map((map) => (
        <div
          key={map.id}
          className="map-card"
          style={{ backgroundImage: `url(/maps/map${map.id}.${map.format})` }}
          onClick={() => handleCardClick(map.id)}
        >
          <h3>{map.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Maps;