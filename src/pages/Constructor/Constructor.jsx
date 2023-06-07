import React from 'react';
import Features from '../../Components/Features';
import TitlePage from '../../Components/TitlePage';
import titleBg from '../../img/Constructor/title-page-bg.png'
import img from '../../img/Features/constructor.png'
const Constructor = () => {
  return (
    <main>
      <TitlePage 
        title={'Конфигуратор ПК'} 
        desc={'Позволяет собрать компьютер, о котором вы мечтали. Изменить комплектацию представленных на сайте сборок, узнать цену онлайн, сравнить характеристики. Оформить заказ и получить готовый ПК с абсолютно бесплатной профессиональной сборкой. Продвинутый онлайн-сервис для модификации ПК'}
        btn='ПОКАЗАТЬ ПОПУЛЯРНЫЕ СБОРКИ'
        titleBg={titleBg}
      />
      <Features
        name='Онлайн конструктор для сборки компьютеров'
        first='Сборка компьютеров онлайн - под любые задачи по выгодным ценам. Умный конструктор ПК.'
        second='Онлайн проверка совместимости комплектующих, алгоритм интеллектуального подбора'
        third='Собрать ПК - игровой, домашний, офисный, для работы с графикой. Гибкая модификация ПК.'
        img={img}
      />
    </main>
  );
}

export default Constructor;
