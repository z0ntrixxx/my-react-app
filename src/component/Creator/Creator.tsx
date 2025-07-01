import React from 'react';
import { CardList } from '../CardList/CardList';

export const Creator = (): React.ReactElement => {
    return (
        <section className="container creator">
            <div className="creator__content">

                <div className="creator__left">
                    <h2 className="creator__title">Музыкальные инструменты —<br/>
                    <span className="creator__span">свидетели эпох</span> хранители мелодий веков</h2>
                    <p className="creator__description">
                        Каждый инструмент — мост между прошлым и будущим.<br/>
В его звучании — отзвук веков, в его форме — отражение культуры.<br/>
Он не просто создает музыку — он хранит её душу.
                    </p>
                    <button className="creator__button" type="button">Попробуйте прямо сейчас</button>
                </div>

                <div className="creator__right">
                        <CardList/>
                        <img src="img/planet.png" alt="Сеть интернета на планете" />
                </div>
            </div>
        </section>
    );
}