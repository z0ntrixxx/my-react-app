import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (): React.ReactElement => {
    return (
        <header className="container header">
        <div className="header__container">
            <div className="header__logo">
                <NavLink to ="/"><img src="img/Logo.png" alt="Splice"/></NavLink>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><NavLink to ="/">Студия</NavLink></li>
                    <li><NavLink to ="/">Сообщество</NavLink></li>
                    <li><NavLink to ="/">Звуки</NavLink></li>
                    <li><NavLink to ="/">Плагины</NavLink></li>
                    <li><NavLink to ="/">Блог</NavLink></li>
                    <li><NavLink to ="/forcards">Карточки</NavLink></li>
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