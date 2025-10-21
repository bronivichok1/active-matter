import React, { useState } from 'react';
import '../CSS/AllPage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function Items() {

  const navigate = useNavigate();
  const ItemsArray = [
    { id: 1, name: 'Меч', price: 100, text: 'Острый меч для ближнего боя', img: '/images/sword.jpg', type: 'оружие' },
    { id: 2, name: 'Щит', price: 80, text: 'Прочный щит для защиты', img: '/images/shield.jpg', type: 'броня' },
    { id: 3, name: 'Лук', price: 120, text: 'Мощный лук для дальних атак', img: '/images/bow.jpg', type: 'оружие' },
    { id: 4, name: 'Зелье здоровья', price: 50, text: 'Восстанавливает здоровье', img: '/images/potion.jpg', type: 'зелье' },
    { id: 5, name: 'Кольчуга', price: 200, text: 'Лёгкая броня для защиты', img: '/images/armor.jpg', type: 'броня' },
  ];

  // Состояния для поиска и фильтрации
  const [searchQuery, setSearchQuery] = useState(''); // Поиск по названию
  const [minPrice, setMinPrice] = useState(''); // Минимальная цена
  const [maxPrice, setMaxPrice] = useState(''); // Максимальная цена
  const [selectedTypes, setSelectedTypes] = useState([]); // Выбранные типы
  const [showFilters, setShowFilters] = useState(false); // Отображение фильтров
  const [expandedCard, setExpandedCard] = useState(null); // Открытая карточка

  // Фильтрация предметов
  const filteredItems = ItemsArray.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      (minPrice ? item.price >= Number(minPrice) : true) &&
      (maxPrice ? item.price <= Number(maxPrice) : true);
    const matchesType = selectedTypes.length > 0 ? selectedTypes.includes(item.type) : true;
    return matchesName && matchesPrice && matchesType;
  });

  // Обработчик разворачивания карточки
  const handleExpand = (id) => {
    setExpandedCard(id === expandedCard ? null : id);
  };

  // Обработчик выбора типа
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div>
    <Header/>
    <div className="items-container">
      {/* Поиск по названию */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Скрыть фильтры' : 'Фильтры'}
        </button>
      </div>

      {/* Фильтры */}
      {showFilters && (
        <div className="filters">
          <div className="price-filters">
            <input
              type="number"
              placeholder="Цена от..."
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Цена до..."
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div className="type-filters">
            {['оружие', 'броня', 'зелье'].map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Карточки предметов */}
      <div className="items-list">
        {filteredItems.map((item) => (
          <div key={item.id} className="item-card">
            <div
              className="item-summary"
              onClick={() => handleExpand(item.id)}
            >
              <img src={item.img} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
            </div>
            {expandedCard === item.id && (
              <div className="item-details">
                <p>Цена: {item.price} монет</p>
                <p>Тип: {item.type}</p>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Items;