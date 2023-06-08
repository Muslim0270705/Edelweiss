import React, { useState,useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import header_logo from '../../img/logo.svg';
import header__callback from '../../img/call-back.svg';
import header__phone from '../../img/icons/phone.svg';
import { MdLocationOn } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector,useDispatch } from "react-redux";
import { getComps,Search } from "../../redux/reducers/comp";
import Card from '../../Components/Card';


const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0});
  const headerRef = useRef(null);

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight) * 0.62555) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  const dispatch = useDispatch()
  const {list,title} = useSelector(store => store.comp)

  useEffect(() => {
    dispatch(getComps(title))
  },[title])


  const [active,setActive] = useState(false)
  const handlerChange = (e) => {
    dispatch(Search(e.target.value))
  }
  // setInterval(() => {
  //   console.log(active)
  // },1000)
  const {cart} = useSelector(store => store.comp)

  return (
    <header className='header' style={{ marginTop: sticky.offset}}>
      <div className="header__head">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__start">
              <div className="header__logo">
                <Link to={'/'}>
                  <img src={header_logo} alt="" />
                </Link>
              </div>
              <span href='#call-back' className="call_back">
                <img src={header__callback} alt="" />
              </span>

              <a href='tel:996704133299' className={'header__phone'}>
                <img src={header__phone} alt="" />
                <span className={'header__phone-tel'}>996 (704) 13 32 99</span>
              </a>
              <a href="#locationModal" className='header__location'>
                <MdLocationOn color='white' />
                <span className={'header__location-text'}>Бишкек</span>
              </a>
            </div>
            <div className="header__end">
              <nav className='header__menu-top'>
                <div className='header__menu-top-box'>
                  <Link to={'/article/'}>
                    <span>Статьи</span>
                  </Link>
                </div>
                <div className='header__menu-top-box two-lvl'>
                  <Link to={'/about-us'}>
                    <span>о нас</span>
                    <HiDotsVertical style={{ width: '16px', height: '9px' }} />
                    <div class="header__menu-top-hidd">
                      <Link itemprop="url" to="/faq/" class="header__menu-top-link-second">
                        <svg className='header__menu-top-link-second-icon' width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                          <path className='header__menu-top-link-second-icon' d="M0.719078 0.826172H1.36361C1.41087 0.826172 1.44955 0.864844 1.44955 0.912109V6.47656H6.67025V5.69238C6.67025 5.62041 6.75404 5.57959 6.8099 5.62471L8.33421 6.82783C8.34449 6.83587 8.35279 6.84614 8.35851 6.85787C8.36422 6.86959 8.36719 6.88246 8.36719 6.89551C8.36719 6.90855 8.36422 6.92142 8.35851 6.93315C8.35279 6.94487 8.34449 6.95514 8.33421 6.96318L6.8099 8.16631C6.75296 8.21143 6.67025 8.17061 6.67025 8.09863V7.29297H1.32064C0.633141 7.29297 0.633141 7.31235 0.633141 6.93315V0.912109C0.633141 0.864844 0.671812 0.826172 0.719078 0.826172Z" fill="white" />
                        </svg>
                        <span itemprop="name">FAQ</span>
                      </Link>

                      <Link itemprop="url" to="/about/" class="header__menu-top-link-second">
                        <svg className='header__menu-top-link-second-icon' width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                          <path className='header__menu-top-link-second-icon' d="M0.719078 0.826172H1.36361C1.41087 0.826172 1.44955 0.864844 1.44955 0.912109V6.47656H6.67025V5.69238C6.67025 5.62041 6.75404 5.57959 6.8099 5.62471L8.33421 6.82783C8.34449 6.83587 8.35279 6.84614 8.35851 6.85787C8.36422 6.86959 8.36719 6.88246 8.36719 6.89551C8.36719 6.90855 8.36422 6.92142 8.35851 6.93315C8.35279 6.94487 8.34449 6.95514 8.33421 6.96318L6.8099 8.16631C6.75296 8.21143 6.67025 8.17061 6.67025 8.09863V7.29297H1.32064C0.633141 7.29297 0.633141 7.31235 0.633141 6.93315V0.912109C0.633141 0.864844 0.671812 0.826172 0.719078 0.826172Z" fill="white" />
                        </svg>
                        <span itemprop="name">О компании</span>
                      </Link>

                      <Link itemprop="url" to="/reviews/" class="header__menu-top-link-second">
                        <svg className='header__menu-top-link-second-icon' width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                          <path className='header__menu-top-link-second-icon' d="M0.719078 0.826172H1.36361C1.41087 0.826172 1.44955 0.864844 1.44955 0.912109V6.47656H6.67025V5.69238C6.67025 5.62041 6.75404 5.57959 6.8099 5.62471L8.33421 6.82783C8.34449 6.83587 8.35279 6.84614 8.35851 6.85787C8.36422 6.86959 8.36719 6.88246 8.36719 6.89551C8.36719 6.90855 8.36422 6.92142 8.35851 6.93315C8.35279 6.94487 8.34449 6.95514 8.33421 6.96318L6.8099 8.16631C6.75296 8.21143 6.67025 8.17061 6.67025 8.09863V7.29297H1.32064C0.633141 7.29297 0.633141 7.31235 0.633141 6.93315V0.912109C0.633141 0.864844 0.671812 0.826172 0.719078 0.826172Z" fill="white" />
                        </svg>
                        <span itemprop="name">Отзывы</span>
                      </Link>
                    </div>
                  </Link>
                </div>
                <div className='header__menu-top-box two-lvl'>
                  <Link to={'/article/'}>
                    <span>Клиентам</span>
                    <HiDotsVertical style={{ width: '16px', height: '9px' }} />

                    <div class="header__menu-top-hidd">
                      <Link itemprop="url" to="/faq/" class="header__menu-top-link-second">
                        <svg className='header__menu-top-link-second-icon' width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                          <path className='header__menu-top-link-second-icon' d="M0.719078 0.826172H1.36361C1.41087 0.826172 1.44955 0.864844 1.44955 0.912109V6.47656H6.67025V5.69238C6.67025 5.62041 6.75404 5.57959 6.8099 5.62471L8.33421 6.82783C8.34449 6.83587 8.35279 6.84614 8.35851 6.85787C8.36422 6.86959 8.36719 6.88246 8.36719 6.89551C8.36719 6.90855 8.36422 6.92142 8.35851 6.93315C8.35279 6.94487 8.34449 6.95514 8.33421 6.96318L6.8099 8.16631C6.75296 8.21143 6.67025 8.17061 6.67025 8.09863V7.29297H1.32064C0.633141 7.29297 0.633141 7.31235 0.633141 6.93315V0.912109C0.633141 0.864844 0.671812 0.826172 0.719078 0.826172Z" fill="white" />
                        </svg>
                        <span itemprop="name">ТЕХ. ПОДДЕРЖКА</span>
                      </Link>

                      <Link itemprop="url" to="/about/" class="header__menu-top-link-second">
                        <svg className='header__menu-top-link-second-icon' width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                          <path className='header__menu-top-link-second-icon' d="M0.719078 0.826172H1.36361C1.41087 0.826172 1.44955 0.864844 1.44955 0.912109V6.47656H6.67025V5.69238C6.67025 5.62041 6.75404 5.57959 6.8099 5.62471L8.33421 6.82783C8.34449 6.83587 8.35279 6.84614 8.35851 6.85787C8.36422 6.86959 8.36719 6.88246 8.36719 6.89551C8.36719 6.90855 8.36422 6.92142 8.35851 6.93315C8.35279 6.94487 8.34449 6.95514 8.33421 6.96318L6.8099 8.16631C6.75296 8.21143 6.67025 8.17061 6.67025 8.09863V7.29297H1.32064C0.633141 7.29297 0.633141 7.31235 0.633141 6.93315V0.912109C0.633141 0.864844 0.671812 0.826172 0.719078 0.826172Z" fill="white" />
                        </svg>
                        <span itemprop="name">ДОСТАВКА И ОПЛАТА</span>
                      </Link>

                      <Link itemprop="url" to="/reviews/" class="header__menu-top-link-second">
                        <svg className='header__menu-top-link-second-icon' width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                          <path className='header__menu-top-link-second-icon' d="M0.719078 0.826172H1.36361C1.41087 0.826172 1.44955 0.864844 1.44955 0.912109V6.47656H6.67025V5.69238C6.67025 5.62041 6.75404 5.57959 6.8099 5.62471L8.33421 6.82783C8.34449 6.83587 8.35279 6.84614 8.35851 6.85787C8.36422 6.86959 8.36719 6.88246 8.36719 6.89551C8.36719 6.90855 8.36422 6.92142 8.35851 6.93315C8.35279 6.94487 8.34449 6.95514 8.33421 6.96318L6.8099 8.16631C6.75296 8.21143 6.67025 8.17061 6.67025 8.09863V7.29297H1.32064C0.633141 7.29297 0.633141 7.31235 0.633141 6.93315V0.912109C0.633141 0.864844 0.671812 0.826172 0.719078 0.826172Z" fill="white" />
                        </svg>
                        <span itemprop="name">ГАРАНТИЯ</span>
                      </Link>
                    </div>
                  </Link>
                </div>
                <div className='header__menu-top-box'>
                  <Link to={'/article/'}>
                    <span>Контакты</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className={`header__foot${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__start">
              <div className="header__menu">
                <nav className='header__menu-box'>
                  <Link to={'/constructor'} className='header__menu-link'>
                    Конфигуратор ПК
                  </Link>
                  <Link to={'/nedorogie-pc'} className='header__menu-link'>
                    Недорогие ПК
                  </Link>
                  <Link to={'/power-pc'} className='header__menu-link'>
                    Игровые ПК
                  </Link>
                  <Link to={'/powerfull-pc'} className='header__menu-link'>
                    Мощнейшие ПК
                  </Link>
                  <Link to={'/pc-amd'} className='header__menu-link'>
                    ПК на базе AMD
                  </Link>
                  <Link to={'/game'} className='header__menu-link'>
                    ПК под игру
                  </Link>
                </nav>
              </div>
            </div>
            <div className="header__end">
              <div className="header__control">

                <div className="header__control-box">
                  <Link to=''>
                    <div className="header__control-link-icon-box" onClick={() => setActive(true)}>
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.002 16.002l-5.154-5.154a7 7 0 1 0-2 2l5.154 5.154 2-2zm-16-9c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" fill="#A7E200" />
                      </svg>
                    </div>
                  </Link>
                </div>

                <div className="header__control-box">
                  <Link to='/cart'>
                    <div className="header__control-link-icon-box" >
                      <MdOutlineShoppingCart />
                      <span className="header__control-sum">{cart.length}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        active ?
            <div className="popup">
              <div className="container">
                <GrFormClose className={"popup__close"} onClick={() => setActive(false)}/>
                <input className="popup__input" onChange={handlerChange} type="text"/>
                <div className="popup__row">
                  { title.length ?
                      list.map(item => (
                          // <div className="popup__card">
                          //   <img className="popup__card-img" src={item.img} alt=""/>
                          //   {item.title}
                          // </div>
                          <Card item={item}/>
                      ))
                      : ""
                  }
                </div>
              </div>
            </div>
            : ""
      }

    </header>
  );
};

export default Header;