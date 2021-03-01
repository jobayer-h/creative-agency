import React from 'react';
import './Portfolio.css'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './../../../resorces/carousel-1.png'
import imageTwo from './../../../resorces/carousel-2.png'
import imageThree from './../../../resorces/carousel-3.png'
import imageFour from './../../../resorces/carousel-4.png'
import imageFive from './../../../resorces/carousel-5.png'



const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="text-center my-5"><span style={{ color: '#fff' }}>Here are some of our </span><span className="text-marking">Works</span></h2>

                <div>
                    <Carousel
                        plugins={['rtl', 'arrows']}
                    >
                        <img src={imageOne} />
                        <img src={imageTwo} />
                        <img src={imageThree} />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;