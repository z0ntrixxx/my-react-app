import React from 'react';

export const Footer = (): React.ReactElement =>{
    return (
         <footer className="footer container">
        <div className="footer__logo">
            <img className="logotype" src="img/logoMusik.png" alt="logo_company"/>
            <p className="date__of__protect">2025 Sonata.com Все права защищены</p>
        </div>


        <nav className="footer__nav">
            <div className="footer__nav-block">
                <h2 className="footer__nav__title">Каталог</h2>
                <ul className="footer__nav__list">
                    <li className="footer__nav-list-item"><a href="#">Гитарные</a></li>
                    <li className="footer__nav-list-item"><a href="#">Ударные</a></li>
                    <li className="footer__nav-list-item"><a href="#">Духовые</a></li>
                    <li className="footer__nav-list-item"><a href="#">Аксессуары</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">МузСвитч</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Выбор пользователей</a></li>
                    <li className="footer__nav-list-item"><a href="#">Смена инструмента</a></li>
                    <li className="footer__nav-list-item"><a href="#">Испытайте себя</a></li>
                    <li className="footer__nav-list-item"><a href="#">Предложения для Вас</a></li>
                    <li className="footer__nav-list-item"><a href="#">Ведущие производители</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">Сообщество</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Сайты производителей</a></li>
                    <li className="footer__nav-list-item"><a href="#">Проекты</a></li>
                    <li className="footer__nav-list-item"><a href="#">Объединения пользователей</a></li>
                    <li className="footer__nav-list-item"><a href="#">Общий чат</a></li>
                    <li className="footer__nav-list-item"><a href="#">Вопрос - ответ</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">Живая экосистема</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Фан-зоны брендов</a></li>
                    <li className="footer__nav-list-item"><a href="#">Краудсорсинговые проекты</a></li>
                    <li className="footer__nav-list-item"><a href="#">Мастерские модификаций</a></li>
                    <li className="footer__nav-list-item"><a href="#">Живые джэм-сессии</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">Звуки</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Особенности</a></li>
                    <li className="footer__nav-list-item"><a href="#">Каталог</a></li>
                    <li className="footer__nav-list-item"><a href="#">Отзывы</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title"> Помощь покупателю</h2>
                <ul className="footer__nav__list">
                    <li className="footer__nav-list-item"><a href="#">Доставка и оплата</a></li>
                    <li className="footer__nav-list-item"><a href="#">Гарантия и возврат</a></li>
                    <li className="footer__nav-list-item"><a href="#">FAQ</a></li>
                    <li className="footer__nav-list-item"><a href="#">Подбор инструмента (гид для новичков)</a></li>
                </ul>
            </div>
        </nav>
        <div className="footer__social-networks">
            <h2>Найдите нас в соц сетях</h2>
            <div className="footer__social-media">
                <img className="footer__social-media-facebook" src="img/Facebook.png" alt="facebook"/>
                <img className="footer__social-media-twitter" src="img/Twitter.png" alt="twitter"/>
                <img className="footer__social-media-instagram" src="img/Instagram.png" alt="instagram"/>
                <img className="footer__social-media-youtube" src="img/YouTube.png" alt="youtube"/>
            </div>


            <ul className="footer__nav__list">
                <li className="footer__nav-list-item"><a href="#">Условия использования</a></li>
                <li className="footer__nav-list-item"><a href="#">Политика конфиденциальности</a></li>
                <li className="footer__nav-list-item"><a href="#">Работы</a></li>
                <li className="footer__nav-list-item"><a href="#">Контакты</a></li>
                <li className="footer__nav-list-item"><a href="#">Помощь</a></li>
            </ul>
        </div>


    </footer>
    )
}