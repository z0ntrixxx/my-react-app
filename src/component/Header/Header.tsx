import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface HeaderProps {
    openForm: () => void;
}

export const Header = ({ openForm }: HeaderProps): React.ReactElement => {
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
                    <NavLink to="/"><img src="img/logoMusik.png" alt="Соната" /></NavLink>
                </div>
                <nav className="header__nav">
                    <ul>
                        <li><NavLink to="#sound" onClick={() => handleAnchorClick('sound')}>Звуки</NavLink></li>
                        <li><NavLink to="#musSwitch" onClick={() => handleAnchorClick('musSwitch')}>МузСвитч</NavLink></li>
                        <li><NavLink to="#catalog" onClick={() => handleAnchorClick('catalog')}>Каталог</NavLink></li>
                        <li><NavLink to="/forcards">Карточки</NavLink></li>
                        <li><NavLink to="#community" onClick={() => handleAnchorClick('community')}>Сообщество</NavLink></li>
                    </ul>
                </nav>
                <div className="header__buttons">
                    <button className="btn-signup" onClick={openForm}>Заказать</button>
                </div>
            </div>
        </header>

    )
}