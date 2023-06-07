import React from 'react';
import {BiLike} from 'react-icons/bi'
import {BiCheckShield} from 'react-icons/bi'
import {BiMessage} from 'react-icons/bi'


const Advatages = () => {
  return (
    <section className='advantages'>
      <div className="container">
        <h3 className="advantages__title title">Наши преимущества</h3>
        <ul className="advantages__list">
          <li className="advantages__li">
          <BiLike className='advantages__li-icon'/>
            <div className="advantages__li-box">
              <div className="advantages__container">
                <div className="advantages__li-head">
                  <p className="advantages__li-counter">
                    01
                  </p>
                  <BiLike className='counter__icon'/>
                </div>
                <p className="advantages__li-title">Профессиональная сборка ПК</p>
                <p className="advantages__li-text">Качественная сборка компьютеров и индивидуальная настройка от инженеров компании EDELWEISS. Персонификация системных блоков</p>
              </div>
            </div>
          </li>
          <li className="advantages__li">
          <BiCheckShield className='advantages__li-icon'/>
            <div className="advantages__li-box">
              <div className="advantages__container">
                <div className="advantages__li-head">
                  <p className="advantages__li-counter">
                    02
                  </p>
                  <BiCheckShield className='counter__icon'/>
                </div>
                <p className="advantages__li-title">Фирменная гарантия</p>
                <p className="advantages__li-text">Расширенная гарантия на компьютер 1 год + 2 года бесплатного сервисного обслуживания от интернет магазина EDELWEISS</p>
              </div>
            </div>
          </li>
          <li className="advantages__li">
          <BiMessage className='advantages__li-icon'/>
            <div className="advantages__li-box">
              <div className="advantages__container">
                <div className="advantages__li-head">
                  <p className="advantages__li-counter">
                    03
                  </p>
                  <BiMessage className='counter__icon'/>
                </div>
                <p className="advantages__li-title">Техническая поддержка</p>
                <p className="advantages__li-text">Оперативно ответим на любые вопросы по настройке оборудования и программного обеспечения при необходимости удаленно настроим ваш ПК</p>
              </div>
            </div>
          </li>
          <li className="advantages__li">
          <BiCheckShield className='advantages__li-icon'/>
            <div className="advantages__li-box">
              <div className="advantages__container">
                <div className="advantages__li-head">
                  <p className="advantages__li-counter">
                    04
                  </p>
                  <BiCheckShield className='counter__icon'/>
                </div>
                <p className="advantages__li-title">Доставка по всей Киргизии</p>
                <p className="advantages__li-text">Доставка по всей территории Киргизии. 100 % страховка груза на полную стоимость. Бесплатная доставка по Бишкеку собственной логистической службой</p>
              </div>
            </div>
          </li>
          <li className="advantages__li">
          <BiLike className='advantages__li-icon'/>
            <div className="advantages__li-box">
              <div className="advantages__container">
                <div className="advantages__li-head">
                  <p className="advantages__li-counter">
                    05
                  </p>
                  <BiLike className='counter__icon'/>
                </div>
                <p className="advantages__li-title">Официальный партнер</p>
                <p className="advantages__li-text">Компания EDELWEISS является сертифицированным партнером INTEL, ASUS, MSI, NVIDIA по сборке готовых игровых решений на базе GEFORCE RTX</p>
              </div>
            </div>
          </li>
          <li className="advantages__li">
          <BiMessage className='advantages__li-icon'/>
            <div className="advantages__li-box">
              <div className="advantages__container">
                <div className="advantages__li-head">
                  <p className="advantages__li-counter">
                    06
                  </p>
                  <BiMessage className='counter__icon'/>
                </div>
                <p className="advantages__li-title">Акции Скидки Подарки</p>
                <p className="advantages__li-text">На сайте регулярно проводятся акции, действует специальная система скидок и спецпредложений, разыгрываются ценные подарки</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advatages;
