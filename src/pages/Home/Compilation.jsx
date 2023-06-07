import React from 'react';
import compilationImg from '../../img/Home/compilation-img.png'

const Compilation = () => {
  return (
    <section className='compilation'>
      <div className="container">
        <div className="compilation__wrapper">
          <div className="compilation__img-box">
            <img src={compilationImg} alt=""/>
          </div>
          <div className="compilation__box">
            <h3 className="compilation__title">
              Подбор компьютера по цене, графической карте или <br /> центральному процессору
            </h3>
            <p className="compilation__desc">
              ПК ДЛЯ ГЕЙМИНГА EDELWEISS
            </p>
            <button className='compilation__btn btn'>Игровые компьютеры</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compilation;

