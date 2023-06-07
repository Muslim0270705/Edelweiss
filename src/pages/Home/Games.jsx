import React from 'react';
import {Link} from 'react-router-dom'
import cyberpunk from '../../img/Home/games/cyberPunk.jpeg'
import pubg from '../../img/Home/games/pubg.png'
import wot from '../../img/Home/games/wot.jpeg'
import dota from '../../img/Home/games/dota2.jpeg'
import cs_go from '../../img/Home/games/cs-go.jpeg'
import minecraft from '../../img/Home/games/minecraft.jpeg'

const Games = () => {
  return (
    <section className='games'>
      <div className="container">
        <div className="catalog__title">
            <h3 className="catalog__title-text title">ПК под игры</h3>
            <button className="btn-secondary catalog-title-btn"><Link to={''}>Смотреть все</Link></button>
        </div>
        <ul className="games__list">
          <li className="games__li">
            <Link to=''>
              <div className="games__li-img-box">
                <img className='games__li-img' src={cyberpunk} alt="" />
              </div>
              <div className="games__li-box">
                <p className="games__title">Cyberpunk 2077</p>
                <p className="games__price">
                  <span className="games__price-span" style={{'transition': 'none'}}>
                    от 90 000
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='games__price-span-icon' fill-rule="evenodd" clip-rule="evenodd" d="M10 19.167A9.167 9.167 0 1 0 10 .833a9.167 9.167 0 0 0 0 18.334zm3.962-9.513c.136-.405.205-.84.205-1.307 0-.571-.08-1.064-.237-1.48a2.623 2.623 0 0 0-.677-1.042 2.758 2.758 0 0 0-1.056-.623A4.424 4.424 0 0 0 10.81 5H7.5v5h-.833v1.667H7.5v.833h-.833v1.667H7.5v1.666h1.797v-1.666H12.5V12.5H9.297v-.822h1.607c.547 0 1.025-.084 1.434-.25.41-.176.746-.415 1.01-.716.272-.3.477-.653.614-1.058zm-1.97-2.568c.262.28.394.69.394 1.23 0 .518-.132.933-.394 1.245-.252.3-.647.451-1.182.451H9.297V6.65h1.497c.536 0 .935.145 1.198.436z" fill="#A7E200"/></svg>
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li className="games__li">
            <Link to=''>
              <div className="games__li-img-box">
                <img className='games__li-img' src={pubg} alt="" />
              </div>
              <div className="games__li-box">
                <p className="games__title">PUBG</p>
                <p className="games__price">
                  <span className="games__price-span" style={{'transition': 'none'}}>
                    от 80 000
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='games__price-span-icon' fill-rule="evenodd" clip-rule="evenodd" d="M10 19.167A9.167 9.167 0 1 0 10 .833a9.167 9.167 0 0 0 0 18.334zm3.962-9.513c.136-.405.205-.84.205-1.307 0-.571-.08-1.064-.237-1.48a2.623 2.623 0 0 0-.677-1.042 2.758 2.758 0 0 0-1.056-.623A4.424 4.424 0 0 0 10.81 5H7.5v5h-.833v1.667H7.5v.833h-.833v1.667H7.5v1.666h1.797v-1.666H12.5V12.5H9.297v-.822h1.607c.547 0 1.025-.084 1.434-.25.41-.176.746-.415 1.01-.716.272-.3.477-.653.614-1.058zm-1.97-2.568c.262.28.394.69.394 1.23 0 .518-.132.933-.394 1.245-.252.3-.647.451-1.182.451H9.297V6.65h1.497c.536 0 .935.145 1.198.436z" fill="#A7E200"/></svg>
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li className="games__li">
            <Link to=''>
              <div className="games__li-img-box">
                <img className='games__li-img' src={wot} alt="" />
              </div>
              <div className="games__li-box">
                <p className="games__title">World of Tanks</p>
                <p className="games__price">
                  <span className="games__price-span" style={{'transition': 'none'}}>
                    от 40 000
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='games__price-span-icon' fill-rule="evenodd" clip-rule="evenodd" d="M10 19.167A9.167 9.167 0 1 0 10 .833a9.167 9.167 0 0 0 0 18.334zm3.962-9.513c.136-.405.205-.84.205-1.307 0-.571-.08-1.064-.237-1.48a2.623 2.623 0 0 0-.677-1.042 2.758 2.758 0 0 0-1.056-.623A4.424 4.424 0 0 0 10.81 5H7.5v5h-.833v1.667H7.5v.833h-.833v1.667H7.5v1.666h1.797v-1.666H12.5V12.5H9.297v-.822h1.607c.547 0 1.025-.084 1.434-.25.41-.176.746-.415 1.01-.716.272-.3.477-.653.614-1.058zm-1.97-2.568c.262.28.394.69.394 1.23 0 .518-.132.933-.394 1.245-.252.3-.647.451-1.182.451H9.297V6.65h1.497c.536 0 .935.145 1.198.436z" fill="#A7E200"/></svg>
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li className="games__li">
            <Link to=''>
              <div className="games__li-img-box">
                <img className='games__li-img' src={dota} alt="" />
              </div>
              <div className="games__li-box">
                <p className="games__title">Dota 2</p>
                <p className="games__price">
                  <span className="games__price-span" style={{'transition': 'none'}}>
                    от 45 000
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='games__price-span-icon' fill-rule="evenodd" clip-rule="evenodd" d="M10 19.167A9.167 9.167 0 1 0 10 .833a9.167 9.167 0 0 0 0 18.334zm3.962-9.513c.136-.405.205-.84.205-1.307 0-.571-.08-1.064-.237-1.48a2.623 2.623 0 0 0-.677-1.042 2.758 2.758 0 0 0-1.056-.623A4.424 4.424 0 0 0 10.81 5H7.5v5h-.833v1.667H7.5v.833h-.833v1.667H7.5v1.666h1.797v-1.666H12.5V12.5H9.297v-.822h1.607c.547 0 1.025-.084 1.434-.25.41-.176.746-.415 1.01-.716.272-.3.477-.653.614-1.058zm-1.97-2.568c.262.28.394.69.394 1.23 0 .518-.132.933-.394 1.245-.252.3-.647.451-1.182.451H9.297V6.65h1.497c.536 0 .935.145 1.198.436z" fill="#A7E200"/></svg>
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li className="games__li">
            <Link to=''>
              <div className="games__li-img-box">
                <img className='games__li-img' src={cs_go} alt="" />
              </div>
              <div className="games__li-box">
                <p className="games__title">CS GO</p>
                <p className="games__price">
                  <span className="games__price-span" style={{'transition': 'none'}}>
                    от 50 000
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='games__price-span-icon' fill-rule="evenodd" clip-rule="evenodd" d="M10 19.167A9.167 9.167 0 1 0 10 .833a9.167 9.167 0 0 0 0 18.334zm3.962-9.513c.136-.405.205-.84.205-1.307 0-.571-.08-1.064-.237-1.48a2.623 2.623 0 0 0-.677-1.042 2.758 2.758 0 0 0-1.056-.623A4.424 4.424 0 0 0 10.81 5H7.5v5h-.833v1.667H7.5v.833h-.833v1.667H7.5v1.666h1.797v-1.666H12.5V12.5H9.297v-.822h1.607c.547 0 1.025-.084 1.434-.25.41-.176.746-.415 1.01-.716.272-.3.477-.653.614-1.058zm-1.97-2.568c.262.28.394.69.394 1.23 0 .518-.132.933-.394 1.245-.252.3-.647.451-1.182.451H9.297V6.65h1.497c.536 0 .935.145 1.198.436z" fill="#A7E200"/></svg>
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li className="games__li">
            <Link to=''>
              <div className="games__li-img-box">
                <img className='games__li-img' src={minecraft} alt="" />
              </div>
              <div className="games__li-box">
                <p className="games__title">Minecraft</p>
                <p className="games__price">
                  <span className="games__price-span" style={{'transition': 'none'}}>
                    от 35 000
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='games__price-span-icon' fill-rule="evenodd" clip-rule="evenodd" d="M10 19.167A9.167 9.167 0 1 0 10 .833a9.167 9.167 0 0 0 0 18.334zm3.962-9.513c.136-.405.205-.84.205-1.307 0-.571-.08-1.064-.237-1.48a2.623 2.623 0 0 0-.677-1.042 2.758 2.758 0 0 0-1.056-.623A4.424 4.424 0 0 0 10.81 5H7.5v5h-.833v1.667H7.5v.833h-.833v1.667H7.5v1.666h1.797v-1.666H12.5V12.5H9.297v-.822h1.607c.547 0 1.025-.084 1.434-.25.41-.176.746-.415 1.01-.716.272-.3.477-.653.614-1.058zm-1.97-2.568c.262.28.394.69.394 1.23 0 .518-.132.933-.394 1.245-.252.3-.647.451-1.182.451H9.297V6.65h1.497c.536 0 .935.145 1.198.436z" fill="#A7E200"/></svg>
                  </span>
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Games;
