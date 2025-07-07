import React from 'react';

export const Promo = (): React.ReactElement => {
    return (
        <section className="container promo">
            <div className="promo__content">
                <h2>Музыка в каждом<br>
                </br> инструменте -<br /><span className="sounds__title-span"> выбирай свой!</span></h2>
                <p>Музыка – это свобода. А наш магазин – место, где рождаются мелодии. Приходите за инструментом. Музыка ближе, чем кажется!</p>
                <button className="btn-promo">Заказать</button>
            </div>
            <div className="promo__image">
                <img src="img/Shop.png" className="promo__people" alt="Магазин" />
            </div>
        </section>
    )
}