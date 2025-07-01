import react from 'react';

export const Studio = (): React.ReactElement =>{
    return (
        <section className="container studio">

        <img className="studio__image" src="img/anotherTools.png" alt="Показ функционала внутри"/>

        <div className="studio__content">
            <h4 className="studio__subtitle">МузСвитч</h4>
            <h2 className="studio__title">Оставайтесь с <span className="studio__span">нами</span></h2>
            <p className="studio__description">Мечтали научиться играть, но не знаете, с чего начать?<br/>
Не переживайте — в любой момент вы можете изменить свой выбор!<br/>
Попробуйте гитару, почувствуйте клавиши под пальцами,<br/> 
раскройте ритм в ударных —
главное сделать первый шаг.<br/>
А если захотите что-то новое — мы всегда поможем найти ваш инструмент.</p>
            <button className="studio__button" type="button">Выбор за Вами</button>
        </div>
    </section>
    )
}