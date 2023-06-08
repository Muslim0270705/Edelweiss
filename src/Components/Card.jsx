import React from 'react';
import { Link } from 'react-router-dom';
import card_img_pc from '../img/Card/card-pc-img.png'
import rub from '../img/icons/rub.svg'
import iVideo__card from "../img/Card/video-card.svg";
import iCp from "../img/Card/cp.svg";
import iCooler from "../img/Card/cooler.svg";
import iRam from "../img/Card/ram.svg";
import iMtbrd from "../img/Card/motherboard.svg";
import iHard from "../img/Card/hard.svg";
import iSsd from "../img/Card/ssd.svg";
import iBp from "../img/Card/bp.svg";
import iCase from "../img/Card/case.svg";
import iOs from "../img/Card/os.svg";

const Card = ({item}) => {
  return (
    <div className='card'>
        <div className="card__content">
          <Link to='#' className='card__img'>
            <img src={item?.img} alt="" />
          </Link>

          <div className="card__wrapper">
            <Link className="card__title title" >{item?.title}</Link>
            <div className="card__price">
              <span className="card__price-text">{item?.price}</span>
              <span>
                <img src={rub} alt="" />
              </span>
              <span className='card__price-instruktion'> 
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class='instruktion' d="M7.667 4.999H6.333V3.665h1.334V5zm0 5.333H6.333v-4h1.334v4zM7 .332a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 7 .332z" fill="#A7E200"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="card__controll">
            <button className='btn card__controll-btn'>КУПИТЬ</button>
            <button className='btn-secondary card__controll-btn-sec'>ПОДРОБНЕЕ</button>
            <button className='btn-secondary card__controll-btn-conf'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13.473 12.527l-.946.946a.667.667 0 0 1-.94 0l-7.92-7.906a2.54 2.54 0 0 1-.667.1A2.667 2.667 0 0 1 .48 2.133l1.693 1.694.354-.354.946-.946.354-.354L2.133.48A2.667 2.667 0 0 1 5.667 3a2.54 2.54 0 0 1-.1.667l7.906 7.92a.667.667 0 0 1 0 .94zm-12.946-.94a.667.667 0 0 0 0 .94l.946.946a.667.667 0 0 0 .94 0l3.647-3.64-1.887-1.886-3.646 3.64zM12.333.333L9.667 1.667V3L8.22 4.447 9.553 5.78 11 4.333h1.333l1.334-2.666L12.333.333z" fill="#A7E200"/></svg>
            </button>
          </div>

          <p className="card__desc">
            {item?.desc}
          </p>

          <ul className="card__structure">
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iVideo__card} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Видео-карта</p>
                <p className='card__structure-li-title'>{item?.GPU}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iCp} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Процессор</p>
                <p className='card__structure-li-title'>{item?.CPU}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iCooler} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Охлаждение</p>
                <p className='card__structure-li-title'>{item?.Cooler}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iRam} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Оперативная память</p>
                <p className='card__structure-li-title'>{item?.RAM}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iMtbrd} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Материнская плата</p>
                <p className='card__structure-li-title'>{item?.Motherboard}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iHard} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Жёсткий диск</p>
                <p className='card__structure-li-title'>{item?.HDD}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iSsd} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Диск SSD</p>
                <p className='card__structure-li-title'>{item?.SSD}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iBp} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Блок питания</p>
                <p className='card__structure-li-title'>{item?.BP}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iCase} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Корпус</p>
                <p className='card__structure-li-title'>{item?.Case}</p>
              </div>
            </li>
            <li className='card__structure-li'>
              <img className='card__structure-li-img' src={iOs} alt="" />
              <div className='card__structure-li-right'>
                <p className='card__structure-li-subtitle'>Система</p>
                <p className='card__structure-li-title'>{item?.OS}</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Card;
