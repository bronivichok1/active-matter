import React, { useState } from 'react';
import '../CSS/AllPage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function Items() {

  const navigate = useNavigate();
  const ItemsArray = [
    { id: 1, name: 'Шлем КВР',rare:'обычный' , price: 165, text: '', type: 'броня', priceInReid:'419-700',Chronotraces:35},
    { id: 2, name: 'Подсумки новобранца',rare:'обычный' , price: 0, text: '', type: 'снаряжение', priceInReid:'150-250',Chronotraces:12},
    { id: 3, name: 'Армейские подсумки',rare:'необычный' , price: 0, text: '', type: 'снаряжение', priceInReid:'190-320',Chronotraces:24},
    { id: 4, name: 'Рюкзак Альпениста',rare:'редкий' , price: 0, text: '', type: 'снаряжение', priceInReid:'480-800',Chronotraces:80},
    { id: 5, name: 'Большой Рюкзак',rare:'редкий' , price: 765, text: '', type: 'снаряжение', priceInReid:'0',Chronotraces:0},
    { id: 6, name: 'Туристический Рюкзак',rare:'обычный' , price: 0, text: '', type: 'снаряжение', priceInReid:'390-750',Chronotraces:48},
    { id: 7, name: 'Фонарик', rare:'обычный' , price: 48, text: '', type: 'снаряжение', priceInReid:'60-100',Chronotraces:5},
    { id: 8, name: 'Пистолет Макарова',rare:'обычный' , price: 0, text: '', type: 'оружие', priceInReid:'180-300',Chronotraces:5},
    { id: 9, name: 'M1911A1',rare:'обычный' , price: 0, text: '', type: 'оружие', priceInReid:'209-350',Chronotraces:10},
    { id: 10, name: 'M9',rare:'обычный' , price: 0, text: '', type: 'оружие', priceInReid:'209-350',Chronotraces:10},
    { id: 11, name: 'Scorpion EVO 3',rare:'необычный' , price: 5250, text: '', type: 'оружие', priceInReid:'',Chronotraces:0},
    { id: 12, name: 'ПП-19-01',rare:'необычный' , price:1875, text: '', type: 'оружие', priceInReid:'',Chronotraces:0},
    { id: 13, name: 'UMP45',rare:'обычный' , price: 2587, text: '', type: 'оружие', priceInReid:'',Chronotraces:0},
    { id: 14, name: 'MP5',rare:'обычный' , price: 2186, text: '', type: 'оружие', priceInReid:'',Chronotraces:0},
    { id: 15, name: 'M9',rare:'обычный' , price: 0, text: '', type: 'оружие', priceInReid:'209-350',Chronotraces:0},

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
            {['оружие', 'броня', 'снаряжение'].map((type) => (
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
              <img src={'/items/'+item.id+'.jpg'} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
            </div>
            {expandedCard === item.id && (
              <div className="item-details">
                <p>Тип: {item.type}</p>
                <p>Цена: {item.price} кредит</p>
                <p>Цена обогащённого: {item.priceInReid} кредит</p>
                <p>Хроноследы обогащённого: {item.Chronotraces} </p>
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