import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

function Main() {
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
              <p>Кратко о себе Кратко о себеКратко о себе Кратко о себеКратко о себе Кратко о себе
                Кратко о себе Кратко о себеКратко о себе Кратко о себеКратко о себе Кратко о себе Кратко о
                себе Кратко о себеКратко о себе Кратко о себеКратко о себе Кратко о себе Кратко о себе
                Кратко о себеКратко о себе Кратко о себеКратко о себе Кратко о себе</p>
            </div>
            <img src="img/photo.png" width="400" height="400" alt="Фото в резюме" />
          </div>
          <a href="#">Смотреть работу</a>
       </section>
      </main>
      <Footer />
    </div>
  )
}

export default Main;
