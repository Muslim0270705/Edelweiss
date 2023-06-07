import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Slider_1 from "../../../img/Home/Slider/1-slider.jpg";
import Slider_2 from "../../../img/Home/Slider/2-slider.jpg";
import Slider_3 from "../../../img/Home/Slider/3-slider.jpg";
import Slider_4 from "../../../img/Home/Slider/4-slider.jpg";
import Slider_5 from "../../../img/Home/Slider/5-slider.jpg";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules

import { Navigation} from "swiper";


const Slider = () => {
  return (
    <section className='home__slider'>
      <div className="container">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="sliderSwiper"
        >
          <SwiperSlide>
            <div className="slider__block">
              <img src={Slider_1} alt=""/>
              <div className='slider__content'>
                <div className="slider__content-box">
                  <h3 className="slider__name">ЗАРЯЖЕНЫ И НАСТРОЕНЫ НА ПОБЕДУ</h3>
                  <p className='slider__title'>Игровые ПК на базе <br /> GEFORCE RTX 4080</p>
                  <Link to='slider__link'>
                    <button className='slider__link-btn btn'>КУПИТЬ ПК</button>
                  </Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__block">
              <img src={Slider_2} alt="" />
              <div className='slider__content'>
                <div className="slider__content-box">
                  <h3 className="slider__name">Quad HD Gaming</h3>
                  <p className='slider__title'>GEFORCE RTX 3060 Ti в <br /> ПК EDELWEISS</p>
                  <Link to={'/ge-forge3060'}>
                    <button className='slider__link-btn btn'>Перейти</button>
                  </Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__block">
              <img src={Slider_3} alt="" />
              <div className='slider__content'>
                <div className="slider__content-box">
                  <h3 className="slider__name">RTX ON</h3>
                  <p className='slider__title'>КРУТЫЕ ПК для <br /> CYBERPUNK 2077</p>
                  <Link to='slider__link'>
                    <button className='slider__link-btn btn'>Перейти</button>
                  </Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__block">
              <img src={Slider_4} alt="" />
              <div className='slider__content'>
                <div className="slider__content-box">
                  <h3 className="slider__name">СВЕРХМОЩНЫЕ КОМПЬЮТЕРЫ</h3>
                  <p className='slider__title'>Серия экстремально <br /> мощных игровых ПК</p>
                  <Link to='slider__link'>
                    <button className='slider__link-btn btn'>ПОДОБРАТЬ ПК</button>
                  </Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__block">
              <img src={Slider_5} alt="" />
              <div className='slider__content'>
                <div className="slider__content-box">
                  <h3 className="slider__name">ОПТИМАЛЬНАЯ СЕРИЯ ОТ 30 000 РУБ.</h3>
                  <p className='slider__title'>Доступные игровые ПК <br /> EDELWEISS</p>
                  <Link to='slider__link'>
                    <button className='slider__link-btn btn'>ПОДОБРАТЬ ПК</button>
                  </Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
