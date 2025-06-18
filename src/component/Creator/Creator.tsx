import React from 'react';
import {CardList} from '../CardList/CardList';

export const Creator = (): React.ReactElement => {
    return (
        <section className="container creator">
            <div className="creator__content">

                <div className="creator__left">
                    <h2 className="creator__title">Что говорят <span className="creator__span">создатели</span> о Splice</h2>
                    <p className="creator__description">
                        Клиент очень важен, за клиентом пойдет клиент.<br />
                        Augue tellus urna, mi velit diam.<br />
                        Turpis diam amet massa id.
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