import React from 'react';
import './Portfolio.css'
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import imageOne from './../../../resorces/carousel-1.png'
import imageTwo from './../../../resorces/carousel-2.png'
import imageFour from './../../../resorces/carousel-4.png'
import imageFive from './../../../resorces/carousel-5.png'


SwiperCore.use([Pagination,EffectCoverflow ,Autoplay]);

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <br /><br />
                <h2 className="text-center my-5"><span style={{ color: '#fff' }}>Here are some of our </span><span className="text-marking">Works</span></h2>


                <br /><br />
            </div>
            <div className="container-fluid">

                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    autoplay
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src={imageOne} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageTwo} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFour} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFive} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFour} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageTwo} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageOne} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <br/><br/><br/>
        </section>
    );
};

export default Portfolio;