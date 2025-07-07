import React from 'react';

export const Catalog = (): React.ReactElement => {
    return (

<section id="catalog" className="section catalog">
        <div className="catalog__content">
            <h4 className="catalog__subtitle">Каталог</h4>
            <h2 className="catalog__title">Выбери свой<br/><span className="catalog__span">инструмент </span></h2>
            <p className="catalog__description">Каждый инструмент — это новый язык. Какой будет твой?
 Гитара, фортепиано или барабаны — найди то, что заставит твоё сердце биться в ритме!</p>
            <button className="catalog__button" type="button">Выбирайте </button>
        </div>
        <div className="logo-circle-container">
            <div className="circle">
            </div>
            <img src="img/violin.png" className="logo logo_lips" alt="Лого 1"/>
            <img src="img/guitar.png" className="logo logo_vints" alt="Лого 2"/>
            <img src="img/piano.png" className="logo logo_waves" alt="Лого 3"/>
            <img src="img/flute.png" className="logo logo_vinil" alt="Лого 4"/>
            <img src="img/drums.png" className="logo logo_izotope" alt="Лого 5"/>
            <img src="img/trumpet.png" className="logo logo_rc-20" alt="Лого 6"/>
            <img src="img/saxophone.png" className="logo logo_serum" alt="Лого 7"/>
            <img src="img/cello.png" className="logo logo_orange" alt="Лого 8"/>
            <img src="img/ukulele.png" className="logo logo_A" alt="Лого 9"/>
        </div>
    </section>
    )
}