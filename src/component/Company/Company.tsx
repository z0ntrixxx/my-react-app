import React from 'react';
import { Slider } from '../Slider/Swiper';

export const Company = (): React.ReactElement => {
    return (
        <section className="section commpany">
            <h4 className="company__subtitle">Основано в</h4>
            <div className="company__image">
               <Slider/>
            </div>

        </section >

    )
}
