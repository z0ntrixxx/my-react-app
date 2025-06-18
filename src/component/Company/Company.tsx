import { React } from 'react';

export const Company = (): React.ReactElement => {
    return (
<section className="section commpany">
        <h4 className="company__subtitle">Основано в</h4>
        <div className="company__image">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="img/variety.png" alt="Компания variety" className="company__img"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="img/the_verge.png" alt="Компания verge" className="company__img"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="img/billboard.png" alt="Компания bilbord" className="company__img"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="img/wired.png" alt="Компания wired" className="company__img"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="img/complex.png" alt="Компания complex" className="company__img"/>
                    </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    </section>

    )
}