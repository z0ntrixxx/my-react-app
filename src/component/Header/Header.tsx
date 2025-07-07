import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface HeaderProps {
    openForm: () => void;
}

export const Header = ({openForm}: HeaderProps): React.ReactElement => {
    const navigate = useNavigate();
    const handleAnchorClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState(null, '', '/');
    };
    return (
        <header className="container header">
        <div className="header__container">
            <div className="header__logo">
                <NavLink to ="/"><img src="img/Logo.png" alt="Splice"/></NavLink>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><NavLink to="#sound" onClick={() => handleAnchorClick('sound')}>Звуки</NavLink></li>
                    <li><NavLink to="#plugins" onClick={() => handleAnchorClick('plugins')}>Плагины</NavLink></li>
                    <li><NavLink to="#studio" onClick={() => handleAnchorClick('studio')}>Студия</NavLink></li>
                    <li><NavLink to ="/forcards">Карточки</NavLink></li>
                    <li><NavLink to="#community" onClick={() => handleAnchorClick('community')}>Сообщество</NavLink></li>
                    <li><NavLink to="#blog" onClick={() => handleAnchorClick('blog')}>Блог</NavLink></li>
                </ul>
            </nav>
            <div className="header__buttons">
                <button className="btn-login">Войти</button>
                <button className="btn-signup" onClick={openForm}>Зарегистрироваться</button>
            </div>
            
        </div>
    </header>

    )
}