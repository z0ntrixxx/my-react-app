import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    openForm: () => void;
}

export const Header = ({openForm}: HeaderProps): React.ReactElement => {
    return (
        <header className="container header">
        <div className="header__container">
            <div className="header__logo">
                <NavLink to ="/"><img src="img/logoMusik.png" alt="Соната"/></NavLink>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><NavLink to ="/">Звуки</NavLink></li>
                    <li><NavLink to ="/">МузСвитч</NavLink></li>
                    <li><NavLink to ="/">Каталог</NavLink></li>
                    <li><NavLink to ="/forcards">Карточки</NavLink></li>
                </ul>
            </nav>
            <div className="header__buttons">
                <button className="btn-signup" onClick={openForm}>Заказать</button>
            </div>
        </div>
    </header>

    )
}