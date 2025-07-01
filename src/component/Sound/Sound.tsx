import React from 'react';

export const Sound = (): React.ReactElement => {
    return (
        <section className="container sound">
            <div className="sounds__content">
                <h4 className="sounds__subtitle">Звуки</h4>
                <h2 className="sounds__title">Найди свой<span className="sounds__title-span"> звук</span></h2>
                <p className="sounds__description">
                    Здесь живут мелодии, которые ждут своего исполнителя.<br/>
                    Возьмите в руки инструмент — и пусть мир услышит ваш уникальный звук!
                </p>
                <button className="sounds__button" type="button">Попробуй звук</button>
            </div>

            <img className="vector__image" src="img/Vector.png" alt="Фоновая линия" />
            <img className="sounds__image" src="img/tools.png" alt="Свойский саундпад" />
        </section>


    )
}