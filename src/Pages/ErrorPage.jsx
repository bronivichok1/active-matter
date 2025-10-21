import React from 'react';
import '../CSS/AllPage.css';

function ErrorPage() {
  return (
    <div className="page-404">
      <div className="content">
        <h1>404</h1>
        <h2>Страница в разработке</h2>
        <p>Извините, страница, которую вы ищете, пока недоступна. Мы работаем над её созданием!</p>
      </div>
    </div>
  );
}

export default ErrorPage;