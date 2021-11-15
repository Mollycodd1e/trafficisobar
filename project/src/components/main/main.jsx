import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {AppRoute, PAGES} from '../../const';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {changePage} from '../store/action';

function Main() {

  const dispatch = useDispatch();

  return (
    <div className="page">
      <Header />
      <main className="main-page">
        <h1 className="visually-hidden">Резюме</h1>
        <section className="main-page__about about">
          <h2>Обо мне</h2>
          <div className="about__description">
            <div className="about__text">
              <h3>Кратко о себе</h3>
              <p>Здравствуйте! Решил сменить профессию. Закончил курсы HTML Academy по профессии React-разработчик.
                Опыта коммерческой разработки пока что нет, только учебные проекты и проекты перед стажировкой.
                Также сделал собственный Desktop ToDoList на реакте.</p>
            </div>
            <img src="img/iam.jpg" width="400" height="400" alt="Фото в резюме" />
          </div>
          <Link to={AppRoute.EXAMPLE} onClick={() => dispatch(changePage(PAGES[1].page))}>Смотреть работу</Link>
       </section>
      </main>
      <Footer />
    </div>
  )
}

export default Main;
