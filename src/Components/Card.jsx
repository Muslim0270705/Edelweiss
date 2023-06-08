import React,{useState} from 'react';
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
import {AiOutlineShoppingCart,AiOutlineVerticalAlignTop} from "react-icons/ai"
import {BsFillCartCheckFill} from "react-icons/bs"

import { addCart,deleteCart } from "../redux/reducers/comp";
import {useSelector,useDispatch } from "react-redux";

const Card = ({item}) => {
  const [active,setActive] = useState(false)
  const dispatch = useDispatch()
  const {cart} = useSelector(store => store.comp)
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
            <button className='btn-secondary card__controll-btn-sec' onClick={() => setActive(true)}>ПОДРОБНЕЕ</button>
            {
              cart.find(el => el.id == item.id) ?
                  <button className='btn-secondary card__controll-btn-conf' onClick={() => dispatch(deleteCart(item))}>
                    <BsFillCartCheckFill/>
                  </button>
                  :
                  <button className='btn-secondary card__controll-btn-conf' onClick={() => dispatch(addCart(item))}>
                    <AiOutlineShoppingCart/>
                  </button>
            }


          </div>

          <p className="card__desc">
            {item?.desc}
          </p>
          {
            active ?
                <ul className="card__structure">
                  <AiOutlineVerticalAlignTop onClick={() => setActive(false)} className="card__structure-close"/>
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
            </ul> : <p>...Нажми на подробнее</p>
          }
        </div>
    </div>
  );
}

export default Card;
