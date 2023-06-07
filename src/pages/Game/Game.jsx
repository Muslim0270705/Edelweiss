import React from 'react';
import Features from '../../Components/Features';
import TitlePage from '../../Components/TitlePage';
import GameCatalog from './GameCatalog';
import gameBg from '../../img/Constructor/gameBg.png'
import img from '../../img/Features/game.png'
const Game = () => {
  
  return (
    <main>
      <TitlePage 
        title={'Компьютеры под игру'} 
        desc={'Выберите любимую игру, а мы предложим вам вариант сборки оптимизированный под конкретный проект AAA. Понимая особенности геймплея, разрешение монитора, требования игры. Вы получите качественную станцию с оптимальными характеристиками, учитывая ваши финасовые возможности.'}
        btn='УЗНАТЬ БОЛЬШЕ'
        titleBg={gameBg}
      />

      <Features
        name='Настольные ПК для современных игровых приложений'
        first='Продажа компьютеров для игр Pubg, CS:GO, Minecraft, Fortnite, GTA5 от EDELWEISS'
        second='Подбор геймерского компьютера под параметры современных ресурсоёмких игр'
        third='Мощные графические видеокарты, реализация максимального FPS, философия настоящего гейминга'
        img={img}
      />
      <GameCatalog 
      
      />
    </main>
  );
}

export default Game;
