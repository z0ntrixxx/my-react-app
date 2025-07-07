import react from 'react';

export const MusSwitch = (): React.ReactElement => {
    return (
        <section id="musSwitch" className="container musSwitch">

            <img className="musSwitch__image" src="img/anotherTools.png" alt="Показ функционала внутри" />

            <div className="musSwitch__content">
                <h4 className="musSwitch__subtitle">МузСвитч</h4>
                <h2 className="musSwitch__title">Оставайтесь с <span className="musSwitch__span">нами</span></h2>
                <p className="musSwitch__description">Мечтали научиться играть, но не знаете, с чего начать?<br />
                    Не переживайте — в любой момент вы можете изменить свой выбор!<br />
                    Попробуйте гитару, почувствуйте клавиши под пальцами,<br />
                    раскройте ритм в ударных —
                    главное сделать первый шаг.<br />
                    А если захотите что-то новое — мы всегда поможем найти ваш инструмент.</p>
                <button className="musSwitch__button" type="button">Выбор за Вами</button>
            </div>
        </section>
    )
}