import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider =()=>{
    return (
         <Swiper
                    modules={[Navigation]}
                    navigation
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <img src="img/Epiphone.png" alt="Компания Epiphone" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/JackMusik.png" alt="Компания JackMusik" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/Forte.png" alt="Компания Forte" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/behringer.png" alt="Компания behringer" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/KM.png" alt="Компания KM" className="company__img" />
                        </SwiperSlide>
                    </div>
                </Swiper>
    )
}