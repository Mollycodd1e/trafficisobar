import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import {getCat} from '../store/changer/selectors';
import {changeCat} from '../store/action';

function Example() {

  const URLGET = 'https://api.thecatapi.com/v1/images/search';

  const dispatch = useDispatch();
  const activeCat = useSelector(getCat);

  const handleButtonCLick = () => {
    fetch(URLGET)
      .then((response) => response.json())
      .then((json) => dispatch(changeCat(json[0].url)))};

  return (
    <div className="page">
      <Header />
      <main className="main-page">
        <h1 className="visually-hidden">Резюме</h1>
        <section className="main-page__example example">
          <h2>Пример</h2>
          <div className="example__image">
            <h3>Картинка с котиком</h3>
            <img src={`${activeCat}`} width="258" height="258" alt="Фото котика" />
          </div>
          <button onClick={() => handleButtonCLick()}>Загрузить другую</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Example;
