import React from 'react';
import Card from './Card';

const CardRow = () => {
  return (
    <div className='catalog'>
      <div className="container">
        <div className="catalog__row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      
    </div>
  );
}

export default CardRow;
