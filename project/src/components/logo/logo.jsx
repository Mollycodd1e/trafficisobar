import React from "react";
import {AppRoute} from "../../const";
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <Link to={AppRoute.MAIN}>
      <img src="img/logo.png" width="200" height="31" alt="Логотип компании" />
    </Link>
  );
}

export default Logo;
