import React from 'react';
import Card from './Card';
import {useSelector,useDispatch } from "react-redux";
const CardRow = ({limit,bal}) => {
  const dispatch = useDispatch()
  const {list} = useSelector(store => store.comp)
  return (
    <div className='catalog'>
      <div className="container">
        <div className="catalog__row" style={{marginBottom: "40px"}}>
          {
            bal ? list.filter((item,idx) => idx < limit - 1).map(item => (
                <Card item={item}/>
            )):
                list.filter((item,idx) => idx > limit - 2).map(item => (
                    <Card item={item}/>
                ))
          }
        </div>
      </div>
      
    </div>
  );
}

export default CardRow;
