import React from 'react';
import TitlePage from '../../Components/TitlePage';
import titleBg from '../../img/Constructor/basket-bg.png'
const Basket = () => {
  return (
    <div>
       <TitlePage 
        title={'Корзина'} 
        desc={'Посмотрите предложения на главной странице или перейдите в конфигуратор ПК'}
        titleBg={titleBg}
      />

      <div className='basket'> 
        <div className="container">
          <p className='basket__title'>Корзина</p>
          <p>Ваша корзина пустая</p>
          <img src="http://127.0.0.1:8000/media/gpu/GEFORCE_GTX_1650_4%D0%93%D0%B1.png" alt="" />
        </div>
      </div>
      

      <div>

      </div>
    </div>
  );
}

export default Basket;
