import React from 'react';
import { PAGES } from '../../const';
import Logo from '../logo/logo';
import PagesList from '../pages-list/pages-list';
import {useDispatch} from "react-redux";
import {changePage} from "../store/action";

function Header() {

  const dispatch = useDispatch();

  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <div className="main-header__logo" onClick={() => dispatch(changePage(PAGES[0].page))}>
          <Logo />
        </div>
        <PagesList />
        <div className="main-header__button"></div>
      </div>
    </header>
  );
}

export default Header;
