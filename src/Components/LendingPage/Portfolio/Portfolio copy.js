import React from 'react';
import './Portfolio.css'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './../../../resorces/carousel-1.png'
import imageTwo from './../../../resorces/carousel-2.png'
import imageThree from './../../../resorces/carousel-3.png'
import imageFour from './../../../resorces/carousel-4.png'
import imageFive from './../../../resorces/carousel-5.png'
import Slider from 'react-slick';



const Portfolio = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="text-center my-5"><span style={{ color: '#fff' }}>Here are some of our </span><span className="text-marking">Works</span></h2>

                <div>
                    <Slider {...settings}>
                        <div>
                            <img src={imageOne} alt="" />
                        </div>
                        

                    </Slider><Slider {...settings}>
                        <div>
                            <img src={imageOne} alt="" />
                        </div>
                        

                    </Slider><Slider {...settings}>
                        <div>
                            <img src={imageOne} alt="" />
                        </div>
                        

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;