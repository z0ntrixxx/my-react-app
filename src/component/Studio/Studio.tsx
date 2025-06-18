import react from 'react';

export const Studio = (): React.ReactElement =>{
    return (
        <section className="container studio">

        <img className="studio__image" src="img/browse.png" alt="Показ функционала внутри"/>

        <div className="studio__content">
            <h4 className="studio__subtitle">Студия</h4>
            <h2 className="studio__title">Оставайтесь в <br/><span className="studio__span">гармонии</span></h2>
            <p className="studio__description">Попробуйте ведущее в отрасли <br/> музыкальное программное обеспечение<br/>
                бесплатно, со временем окупите его и
                будете его владельцем навсегда.</p>
            <button className="studio__button" type="button">Попробуйте студию</button>
        </div>
    </section>
    )
}