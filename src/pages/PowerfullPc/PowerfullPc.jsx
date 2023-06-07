import React from 'react';
import Features from '../../Components/Features';
import TitlePage from '../../Components/TitlePage';
import powerfullBg from '../../img/Constructor/powerfullBg.png'
import img from '../../img/Features/powerfull.png'
const PowerfullPc = () => {
  return (
    <main>
      <TitlePage 
        title={'Сверхмощные компьютеры'} 
        desc={'Топовые ПК - самое совершенное и дорогое в мире железо. Оптимизированы под разрешение экрана 4K. Премиальные компьютеры для профессионалов, энтузиастов и создателей качественного цифрового контента.'}
        titleBg={powerfullBg}
      />
      <Features
        name='Экстремальная серия - мощнейшие ПК'
        first='Высокопроизводительные системы для работы с максимально возможной эффективностью'
        second='Бескомпромиссные решения для экстремалов с колоссальной вычислительной скоростью'
        third='Топовые ПК для гейминга 4K+ с имбалансной конфигурацией и фантастическим FPS'
        img={img}
      />
    </main>
  );
}

export default PowerfullPc;
