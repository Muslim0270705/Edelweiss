import React from 'react';
import {Link} from 'react-router-dom'
import rub from '../../img/icons/rub.svg'
import cyberPunk from '../../img/Game/cyber-punkBig.jpeg'
import pubg from '../../img/Game/game_pubg.jpeg'
import wot from '../../img/Game/game_wot.jpeg'
import dota from '../../img/Game/game_dota.jpeg'
import cs_go from '../../img/Game/game_cs-go.jpeg'
import overwatch from '../../img/Game/overwatch.jpeg'
import minecraft from '../../img/Game/game_minecraft.jpeg'
import fortnite from '../../img/Game/game_fortnite.jpeg'
import rdr2 from '../../img/Game/game_rdr2.jpeg'
import rust from '../../img/Game/game_rust.jpeg'
import gta5 from '../../img/Game/game_gta5.jpeg'
import warface from '../../img/Game/game_warface.jpeg'
import wow from '../../img/Game/game_wow.jpeg'
import apex from '../../img/Game/game_apex.jpeg'
import tarkov from '../../img/Game/game_escape-from-tarkov.jpeg'
import dLigth from '../../img/Game/game_dying-light.jpeg'
import eRing from '../../img/Game/game_elden-ring.jpeg'

const GameCatalog = () => {
  return (
    <section className='game-catalog'>
      <div className="container">
        <div className="game-catalog__wrapper">
          <ul className="game-catalog__ul">
            <li className='game-catalog__li game-catalog__li--big'>
              <Link className='game-catalog__li-link' to='/'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Cyberpunk 2077</p>
                  <p className="game-catalog__li-price">Мин. комплектация от 90 000 <span><img src={rub} alt="" /></span> </p>  
                </div>
                <img className='game-catalog__li-img' src={cyberPunk} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li game-catalog__li--big'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>PUBG</p>
                  <p className="game-catalog__li-price">Мин. комплектация от 80 000 <span><img src={rub} alt="" /></span> </p>
                </div>
                
                <img className='game-catalog__li-img' src={pubg} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>World of Tanks</p>
                  <p className="game-catalog__li-price">Мин. комплектация от 40 000 <span><img src={rub} alt="" /></span> </p>
                </div>
                <img className='game-catalog__li-img' src={wot} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>DOTA 2</p>
                  <p className="game-catalog__li-price">Мин. комплектация от 35 000 <span><img src={rub} alt="" /></span> </p>
                </div>
                <img className='game-catalog__li-img' src={dota} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>CS:GO</p>
                  <p className="game-catalog__li-price">Мин. комплектация от 50 000 <span><img src={rub} alt="" /></span> </p>
                </div>
                <img className='game-catalog__li-img' src={cs_go} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Minecraft</p>
                  <p className="game-catalog__li-price">Мин. комплектация от 35 000 <span><img src={rub} alt="" /></span> </p>
                </div>
                <img className='game-catalog__li-img' src={minecraft} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li game-catalog__li--big'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Fortnite</p>
                </div>
                <img className='game-catalog__li-img' src={fortnite} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li game-catalog__li--big'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>RDR 2</p>
                </div>
                <img className='game-catalog__li-img' src={rdr2} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Rust</p>
                </div>
                <img className='game-catalog__li-img' src={rust} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Gta 5</p>
                </div>
                <img className='game-catalog__li-img' src={gta5} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Warface</p>
                </div>
                <img className='game-catalog__li-img' src={warface} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Overwatch</p>
                </div>
                <img className='game-catalog__li-img' src={overwatch} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li game-catalog__li--big'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>World of Warcraft</p>
                </div>
                <img className='game-catalog__li-img' src={wow} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li game-catalog__li--big'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Apex</p>
                </div>
                <img className='game-catalog__li-img' src={apex} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Escape from Tarkov</p>
                </div>
                <img className='game-catalog__li-img' src={tarkov} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Dying Light</p>
                </div>
                <img className='game-catalog__li-img' src={dLigth} alt="" />
              </Link>
            </li>
            <li className='game-catalog__li'>
              <Link className='game-catalog__li-link' to='#'>
                <div className="game-catalog__li-view">100</div>
                <div className="game-catalog__li-gradient"></div>
                <div className='game-catalog__li-box'>
                  <p className='game-catalog__li-name'>Elden Ring</p>
                </div>
                <img className='game-catalog__li-img' src={eRing} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GameCatalog;
