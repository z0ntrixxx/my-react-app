import React from 'react';

export const Features = (): React.ReactElement => {
    return (
        <section className="container features">
  <div className="features__content">
    <h2 className="features__title">Как звучит на самом деле</h2>

    <div className="features__grid">
      <div className="feature">
        <img src="img/Volume_Up.png" alt="Heart icon" className="feature__icon"/>
        <h3 className="feature__subtitle">100% свободы</h3>
        <p className="feature__description">Выбираете что угодно. Выбор всегда остается за Вами.</p>
      </div>
      <div className="feature">
        <img src="img/Unlock.png" alt="Lock icon" className="feature__icon"/>
        <h3 className="feature__subtitle">Мы подскажем</h3>
        <p className="feature__description">Обратитесь к нам в любое время.</p>
      </div>
      <div className="feature">
        <img src="img/Download.png" alt="Download icon" className="feature__icon"/>
        <h3 className="feature__subtitle">Ваше навсегда</h3>
        <p className="feature__description">Бессрочная гарантия на всё</p>
      </div>
      <div className="feature">
        <img src="img/Play.png" alt="Play icon" className="feature__icon"/>
        <h3 className="feature__subtitle">Индивидуальность</h3>
        <p className="feature__description">Обращайтесь к Нам за уникальными инструментами</p>
      </div>
    </div>
  </div>
</section>
    )
}