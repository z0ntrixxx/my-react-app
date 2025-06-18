import { React } from 'react';

export const Header = (): React.ReactElement => {
    return (
        <header className="container header">
        <div className="header__container">
            <div className="header__logo">
                <img src="img/Logo.png" alt="Splice"/>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="#">Студия</a></li>
                    <li><a href="#">Сообщество</a></li>
                    <li><a href="#">Звуки</a></li>
                    <li><a href="#">Плагины</a></li>
                    <li><a href="#">Блог</a></li>
                </ul>
            </nav>
            <div className="header__buttons">
                <button className="btn-login">Войти</button>
                <button className="btn-signup">Зарегистрироваться</button>
            </div>
        </div>
    </header>

    )
}