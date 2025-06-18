import React from 'react';

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
                    <div className="creator__list">
                        <a className="creator__item" href="#">
                            <p className="creator__description">Я всегда могу найти на Splice то, что ищу,
                        будь то именно то звучание, которое я хочу,
                        или просто немного вдохновения.</p>
                            <div className="creator__user">
                                <div className="card__icon">
                                    <img src="./img/andrew.png" alt="Andrew Huang"/>
                                </div>
                                <div className="creator__info">
                                    <p className="creator__name">Andrew Huang</p>
                                    <p className="creator__role">Артист</p>
                                </div>
                            </div>
                        </a>
                        <a className="creator__item" href="#">
                            <p className="creator__description">Наконец-то появился способ покупать
                        плагины,который работает. Платя понемногу
                        за один раз, производители могут получить
                        законный доступ к лучшим VST.</p>
                            <div className="creator__user">
                                <div className="card__icon">
                                    <img src="./img/kshmr.png" alt="KSHMR"/>
                                </div>
                                <div className="creator__info">
                                    <p className="creator__name">KSHMR</p>
                                    <p className="creator__role">Артист</p>
                                </div>
                            </div>
                        </a>
                        <a className="creator__item" href="#">
                            <p className="creator__description">Было забавно погрузиться в сообщество создателей Splices и
                        изучить инструменты, которые поддерживают мой собственный творческий процесс.</p>
                            <div className="creator__user">
                                <div className="card__icon">
                                    <img src="./img/lee.png" alt="Kesha Lee"/>
                                </div>
                                <div className="creator__info">
                                    <p className="creator__name">Kesha Lee</p>
                                    <p className="creator__role">Артист</p>
                                </div>
                            </div>
                        </a>
                        <a className="creator__item" href="#">
                            <p className="creator__description">Я всегда могу найти на Splice то, что ищу,
                        будь то именно то звучание, которое я хочу,
                        или просто немного вдохновения.</p>
                            <div className="creator__user">
                                <div className="card__icon">
                                    <img src="./img/andrew.png" alt="Andrew Huang"/>
                                </div>
                                <div className="creator__info">
                                    <p className="creator__name">Andrew Huang</p>
                                    <p className="creator__role">Артист</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <img src="img/planet.png" alt="Сеть интернета на планете" />
                </div>
            </div>
        </section>
    )
}