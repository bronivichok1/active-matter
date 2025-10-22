import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import '../CSS/AllPage.css';
import Header from '../Components/Header';
import ShtabMap from '../Images/ShtabMap.jpg'; // Импортируйте изображение

function Shtab() {
  return (
    <div>
      <Header />
      <div className='zavod-container'>
        <TransformWrapper
          initialScale={1}
          minScale={1} // Минимальный масштаб (80% от исходного размера)
          maxScale={10} // Максимальный масштаб (100% от исходного размера)
          limitToBounds={true} // Ограничение перемещения карты в пределах контейнера
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Кнопки управления масштабом */}
              <div className="controls">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>Сбросить</button>
              </div>

              {/* Карта */}
              <TransformComponent>
                <img src={ShtabMap} alt="Карта Штаба" className="map-image" />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}

export default Shtab;