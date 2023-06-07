import React from 'react';
import CardRow from '../../Components/CardRow';
import Features from '../../Components/Features';
import TitlePage from '../../Components/TitlePage';
import amdBg from '../../img/Constructor/amdBg.png'
import img from '../../img/Features/amd.png'


const PcAmd = () => {
  return (
    <main>
      <TitlePage 
        title={'Компьютеры под игру'} 
        desc={'Выберите любимую игру, а мы предложим вам вариант сборки оптимизированный под конкретный проект AAA. Понимая особенности геймплея, разрешение монитора, требования игры. Вы получите качественную станцию с оптимальными характеристиками, учитывая ваши финасовые возможности.'}
        titleBg={amdBg}
      />
      <Features
        name='Компьютеры AMD для профессионалов и требовательных геймеров'
        first='Игровые компьютеры на базе AMD Ryzen Threadripper, уникальная мощь и производительность'
        second='Высокий разгонный потенциал, стабильность в работе, железный аргумент для серьезных задач'
        third='Даже героям требуется мощное железо, сборки ПК на процессоре АМД (Advanced Micro Devices)'
        img={img}
      />
      <CardRow/>
    </main>
  );
}

export default PcAmd;
