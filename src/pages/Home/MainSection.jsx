import React from 'react';
import { Link } from "react-router-dom";

import cooler_pc from '../../img/Home/mainSection/cooler-pc.png'
import asus_rog from '../../img/Home/mainSection/asus-rog-pc.png'
import graph_pc from '../../img/Home/mainSection/graficheskie-pc.png'

const MainSection = () => {
  return (
    <section className='main__section'>
      <div className="container">
          
          <div className="title__box">
            <h2>Производитель игровых ПК</h2>
          </div>
          
          <div className="main__section-container">
            <ul className="main__section-list">
              <li className="main__section-li">
                <Link
                  to={'#'}
                >
                  <div className="main__section-img-box">
                    <img src={cooler_pc} alt="" />
                  </div>
                  <div className="main__section-box">
                    <p className="main__section-title">КОМПЬЮТЕРЫ С СВО</p>
                    <p className="main__section-text">Мощнейшие игровые станции с жидкостным охлаждением процессора и видеокарты.</p>
                  </div>
                </Link>
              </li>
              <li className="main__section-li">
                <Link
                  to={'#'}
                >
                  <div className="main__section-img-box">
                    <img src={asus_rog} alt="" />
                  </div>
                  <div className="main__section-box">
                    <p className="main__section-title">ПК Powered by Asus</p>
                    <p className="main__section-text">Мощнейшие и надежные игровые ПК собранные на отборных комплектующих ASUS Republic of Gamers</p>
                  </div>
                </Link>
              </li>
              <li className="main__section-li">
                <Link
                  to={'#'}
                >
                  <div className="main__section-img-box">
                    <img src={graph_pc} alt="" />
                  </div>
                  <div className="main__section-box">
                    <p className="main__section-title">Графические станции</p>
                    <p className="main__section-text">Компьютеры для графики и тяжелых инженерных расчетов, 3D программ</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
      </div>      
    </section>
  );
}

export default MainSection;
