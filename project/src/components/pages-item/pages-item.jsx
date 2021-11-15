import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {changePage} from "../store/action";

function PagesItem(props) {

  const {page, path, isActive} = props;

  const dispatch = useDispatch();

  const handlePageChange = (evt) => {
    evt.preventDefault();
    dispatch(changePage(page));
  };

  return (
    <li className={`${isActive ? 'main-header__item main-header__item--active' : 'main-header__item'}`} onClick={handlePageChange}>
      <Link to={path}>{page}</Link>
    </li>
  );
}

PagesItem.propTypes = {
  page: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default PagesItem;
