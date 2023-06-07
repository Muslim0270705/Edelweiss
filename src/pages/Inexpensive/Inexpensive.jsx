import React, {useEffect} from 'react';
import CardRow from '../../Components/CardRow';
import Features from '../../Components/Features';
import TitlePage from '../../Components/TitlePage';
import titleBg from '../../img/Constructor/inexpected.png'
import img from '../../img/Features/nedorogie.png'
import axios from "axios"
const Inexpensive = () => {
  

  useEffect(() => {
    axios('http://127.0.0.1:8000/api/v1/get-comps/')
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }, [])
  
  return (
    <main>
      <TitlePage 
        title={'Недорогие игровые компьютеры'} 
        desc={'Позволяет собрать компьютер, о котором вы мечтали. Изменить комплектацию представленных на сайте сборок, узнать цену онлайн, сравнить характеристики. Оформить заказ и получить готовый ПК с абсолютно бесплатной профессиональной сборкой. Продвинутый онлайн-сервис для модификации ПК'}
        btn='ПОКАЗАТЬ ПОПУЛЯРНЫЕ СБОРКИ'
        titleBg={titleBg}
      />
      <Features
        name='Оптимальная серия - доступные игровые ПК'
        first='Бюджетные системные блоки, низкая цена - разумный расход средств'
        second='Современный дизайн и качественная сборка, справедливая стоимость'
        third='Возможность купить дёшево компьютер - универсальное решение для дома и офиса'
        img={img}
      />
      <CardRow/>
    </main>
  );
}

export default Inexpensive;
