import React from 'react';
import {Link} from 'react-router-dom';
import footer_logo from '../../img/logo-footer.svg';
import asus_partner from '../../img/partners/asus.svg'
import msi_partner from '../../img/partners/msi.svg'
import nzxt_partner from '../../img/partners/nzxt.svg'
import nvidia_partner from '../../img/partners/nvidia.svg'
import corsair_partner from '../../img/partners/corsair.svg'
import { AiFillFacebook } from "react-icons/ai";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__head">
              <div className="container">
                <div className="footer__wrapper">
                  <div className="footer__start">
                    <div className="footer__logo">
                      <img src={footer_logo} alt="" className='footer__logo-img'/>
                    </div>
                  </div>
                  <div className="footer__end">
                    <nav className='footer__menu-top'>
                      <Link className="footer__menu-top-link">
                        <span>Конфигуратор ПК</span>
                      </Link>
                      <Link className="footer__menu-top-link">
                        <span>Недорогие ПК</span>
                      </Link>
                      <Link className="footer__menu-top-link">
                        <span>Игровые ПК</span>                
                      </Link>
                      <Link className="footer__menu-top-link">
                        <span>Мощнейшие ПК</span>                  
                      </Link>
                      <Link className="footer__menu-top-link">
                        <span>ПК на базе AMD</span>
                      </Link>
                      <Link className="footer__menu-top-link">
                        <span>ПК под игру</span>                 
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__body">
              <div className="container">
                <div className="footer__wrapper">
                  <div className="footer__start">
                    <ul className="footer__sn">
                      <li className='footer__sn-li'>
                        <Link className='footer__sn-link'>
                          <AiFillFacebook style={{width: '20px', height: '20px'}}/>
                        </Link>
                      </li>
                    </ul>

                    <address className='footer__address'>
                      г. Москва, улица Новопоселковая дом 6 корпус 217, 5-ый этаж, офис 521.
                    </address>

                    <div className="footer__contact">
                      <p className="footer__contact-text">Обработка и прием заказов <br/> по телефону:</p>
                      <a className='footer__contact-tel' href="tel:996704133299">8 (800) 234 99 19</a>
                      <p className="footer__contact-time">Пн-Пт: 11:00 - 20:00</p>
                      <p className="footer__contact-time">Сб-Вс: 12:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="footer__end">
                    <div className="footer__catalog">
                      <p className="footer__title">
                        Каталог ПК Edelweiss
                      </p>
                      <div className="footer__catalog-box">
                        <ul className="footer__catalog-list">
                          
                          <li className="footer__catalog-li">
                            <ul className='footer__catalog-category'>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПЕРИФЕРИЯ ДЛЯ ПК
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕРЫ В КРЕДИТ
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ЭКСТРЕМАЛЬНАЯ СЕРИЯ
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ГРАФИЧЕСКИЕ СТАНЦИИ
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕР ДЛЯ КЛУБОВ
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕРЫ ДЛЯ ФОТО
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="footer__catalog-li">
                            <ul className='footer__catalog-category'>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с GEFORCE GTX 16ХХ
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с GEFORCE RTX 3060
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с GEFORCE RTX 3070
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с GEFORCE RTX 4080
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с GEFORCE RTX 4090
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК на КОМПОНЕНТАХ ASUS
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="footer__catalog-li">
                            <ul className='footer__catalog-category'>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  Игровые станции от 30 000
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  Игровые станции от 100 000
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  Игровые станции от 200 000
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  Игровые станции от 300 000
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  Игровые станции от 500 000
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  Подобрать игровой ПК
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="footer__catalog-li">
                            <ul className='footer__catalog-category'>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕРЫ с INTEL CORE i3
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕРЫ с INTEL CORE i5
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕРЫ с INTEL CORE i7
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  КОМПЬЮТЕРЫ с INTEL CORE i9
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с ВОДЯНЫМ ОХЛАЖДЕНИЕМ
                                </Link>
                              </li>
                              <li className='footer__catalog-category-li'>
                                <Link to={''} className='footer__catalog-link'>
                                  ПК с ТЕХНОЛОГИЕ NVIDIA SLI
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__foot">
              <div className="container">
                <div className="footer__wrapper">
                  <div className="footer__start">
                    <div className="footer__partners">
                      <p className="footer__title">
                        Наши партнеры
                      </p>
                      <ul className="footer__partner-list">
                        <li className="footer__partners-li">
                          <img src={asus_partner} alt="" />
                        </li>
                        <li className="footer__partners-li">
                          <img src={msi_partner} alt="" />
                        </li>
                        <li className="footer__partners-li">
                          <img src={nzxt_partner} alt="" />
                        </li>
                        <li className="footer__partners-li">
                          <img src={nvidia_partner} alt="" />
                        </li>
                        <li className="footer__partners-li">
                          <img src={corsair_partner} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer__end"></div>
                </div>
              </div>
            </div>
            <div className="footer__bott">
              <div className="container">
                <div className="footer__wrapper">
                  <ul className='footer__bott-list'>
                    <li className='footer__bott-li'>
                      <Link>
                        Правила использования информации  
                      </Link>
                    </li>
                    <li className='footer__bott-li'>
                      <Link>
                        Публичная оферта
                      </Link>
                    </li>
                    <li className='footer__bott-li'>
                      <Link>
                        Политика конфиденциальности
                      </Link>
                    </li>
                  </ul>
                  <p className="footer__copyright">
                    © 2022 Edelweiss
                  </p>
                </div>
              </div>
            </div>
        </footer>
    );
};

export default Footer;