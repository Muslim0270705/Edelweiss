import React from 'react';


const TitlePage = (props) => {
  return (
    <section className='title-page title-page-contructor'>
      <div className="title-page__bg">
        <img src={props.titleBg} alt="" />
      </div>
      <div className="container">
        <div className="title-page__wrap">
          <h1 className='title-page__wrap-title'>{props.title}</h1>
          <p className='title-page__wrap-desc'>{props.desc}</p>
          <button className='title-page__wrap-btn btn-secondary'>{props.btn}</button>
        </div>
      </div>
    </section>
  );
}
export default TitlePage;
