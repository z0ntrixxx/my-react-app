import { React } from 'react';

export const Promo = (): React.ReactElement => {
    return (
<section className="container promo">
        <div className="promo__content">
            <h2>Где начинается<br/> ваша музыка</h2>
            <p>Звуки, предоставляемые бесплатно. Лучшее программное обеспечение в отрасли. Бесконечное вдохновение.</p>
            <button className="btn-promo">Войти</button>
        </div>
        <div className="promo__image">
            <img src="img/People.png" className="promo__people" alt="Музыкальное творчество"/>
        </div>
    </section>

    )
}