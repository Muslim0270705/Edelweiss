import React,{useEffect} from 'react';
import Card from '../../Components/Card';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { getComps } from "../../redux/reducers/comp";


const Catalog = () => {
  const dispatch = useDispatch()
  const {list} = useSelector(store => store.comp)
  useEffect(() => {
    dispatch(getComps())
  },[])
  return (
    <section className='catalog'>
      <div className="container">
        <div className="catalog__title">
          <h3 className="catalog__title-text title">Хит продаж</h3>
          <button className="btn-secondary catalog-title-btn"><Link to={''}>Смотреть все</Link></button>
        </div>

        <div className="catalog__row">
          {
            list.map(item => (
                <Card item={item}/>
            ))
          }
        </div>
      </div>
      
    </section>
  );
}

export default Catalog;
