import React from 'react';
import {AiFillStar} from 'react-icons/ai'
const Features = (props) => {
  return (
    <section className='features features-contructor'>
      <div className="container">
        <div className="features__wrapper">
          <h4 className='features__title'>{props.name}</h4>
          <ul className='features__ul'>
            <li className='features__li border-right'>
              <AiFillStar fill='#A7E200'/>
              <p className='features__text'>{props.first}</p>
            </li>
            <li className='features__li border-right'>
              <AiFillStar fill='#A7E200'/>
              <p className='features__text'>{props.second}</p>
            </li>
            <li className='features__li '>
              <AiFillStar fill='#A7E200'/>
              <p className='features__text'>
              {props.third}
              </p>
            </li>
          </ul>
          <div className="features__img-box">
            <img className='features__img' src={props.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
