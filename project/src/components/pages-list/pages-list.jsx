import React from "react";
import {useSelector} from 'react-redux';
import {PAGES} from "../../const";
import PagesItem from "../pages-item/pages-item";
import {getActivePage} from '../store/changer/selectors.js'

function PagesList() {

  const activePage = useSelector(getActivePage);

  return (
    <ul className="main-header__list">
      {PAGES.map((page) =>
      <PagesItem page={page.page} path={page.path} key={page.page} isActive={page.page === activePage}/>)}
    </ul>
  );
}

export default PagesList;
