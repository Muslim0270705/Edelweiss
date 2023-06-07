import React from 'react';
import CardRow from '../../Components/CardRow';
import Features from '../../Components/Features';
import TitlePage from '../../Components/TitlePage';
import powerpcBg from '../../img/Constructor/powerpcBg.png'
import img from '../../img/Features/power.png'
const PowerPc = () => {
  return (
    <main>
      <TitlePage 
        title={'Мощные игровые компьютеры'} 
        desc={'Крутые компы для геймеров и киберспортсменов. Мощные ПК 2021 года, надежные компоненты, брендовое и самое быстрое компьютерное железо. Качественная графика GEFORCE RTX, запредельный FPS, идеальный геймплей. Системные блоки с повышенной производительностью - лучшие ПК для игр!'}
        titleBg={powerpcBg}
      />
      <Features
        name='Продвинутая серия - игровые компьютеры'
        first='Мощные системные блоки, высокая скорость работы в играх и графических программах'
        second='Возможность играть на максимальных настройках графики, в проекты AAA'
        third='Качественные компаненты, классный дизайн, крутые игровые ПК EDELWEISS'
        img={img}
      />
      <CardRow/>
    </main>
  );
}

export default PowerPc;
