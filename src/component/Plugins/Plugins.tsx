import { React } from 'react';

export const Plugins = (): React.ReactElement => {
    return (

<section className="section plugins">
        <div className="plugins__content">
            <h4 className="plugins__subtitle">Плагины</h4>
            <h2 className="plugins__title">Создайте свою<br/><span className="plugins__span">цифровую студию</span></h2>
            <p className="plugins__description">Попробуйте ведущее в отрасли музыкальное программное обеспечение
                бесплатно, со временем окупите его и будете его владельцем навсегда.</p>
            <button className="plugins__button" type="button">Попробуйте программу </button>
        </div>
        <div className="logo-circle-container">
            <div className="circle">

            </div>
            <img src="img/logo_lips.png" className="logo logo_lips" alt="Лого 1"/>
            <img src="img/logo_vints.png" className="logo logo_vints" alt="Лого 2"/>
            <img src="img/logo_waves.png" className="logo logo_waves" alt="Лого 3"/>
            <img src="img/logo_vinil.png" className="logo logo_vinil" alt="Лого 4"/>
            <img src="img/logo_izotope.png" className="logo logo_izotope" alt="Лого 5"/>
            <img src="img/logo_rc-20.png" className="logo logo_rc-20" alt="Лого 6"/>
            <img src="img/logo_serum.png" className="logo logo_serum" alt="Лого 7"/>
            <img src="img/logo_orange.png" className="logo logo_orange" alt="Лого 8"/>
            <img src="img/logo_A.png" className="logo logo_A" alt="Лого 9"/>
        </div>
    </section>

    )
}