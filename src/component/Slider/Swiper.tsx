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
                            <img src="img/variety.png" alt="Компания variety" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/the_verge.png" alt="Компания verge" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/billboard.png" alt="Компания bilbord" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/wired.png" alt="Компания wired" className="company__img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="img/complex.png" alt="Компания complex" className="company__img" />
                        </SwiperSlide>
                    </div>
                </Swiper>
    )
}