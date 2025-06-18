import React from 'react';

export const Features = (): React.ReactElement => {
    return (
        <section className="container features">
  <div className="features__content">
    <h2 className="features__title">Как звучит на самом деле</h2>

    <div className="features__grid">
      <div className="feature">
        <img src="img/Volume_Up.png" alt="Heart icon" className="feature__icon"/>
        <h3 className="feature__subtitle">100% свободных от авторских прав</h3>
        <p className="feature__description">Используйте звуки для чего угодно. Они разрешены для коммерческого использования.</p>
      </div>
      <div className="feature">
        <img src="img/Unlock.png" alt="Lock icon" className="feature__icon"/>
        <h3 className="feature__subtitle">Без обязательств</h3>
        <p className="feature__description">Отмените подписку в любое время, без вопросов.</p>
      </div>
      <div className="feature">
        <img src="img/Download.png" alt="Download icon" className="feature__icon"/>
        <h3 className="feature__subtitle">Ваше навсегда</h3>
        <p className="feature__description">Сохраняйте всё, что скачали. Даже если отмените подписку.</p>
      </div>
      <div className="feature">
        <img src="img/Play.png" alt="Play icon" className="feature__icon"/>
        <h3 className="feature__subtitle">Индивидуальные образцы</h3>
        <p className="feature__description">Просмотр и загрузка отдельных образцов, а не только полных пакетов.</p>
      </div>
    </div>
  </div>
</section>
    )
}