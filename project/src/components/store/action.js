import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_PAGE: '/changePage',
  CHANGE_CAT: '/changeCat',
};

export const changePage = createAction(ActionType.CHANGE_PAGE, (page) => ({
  payload: page,
}));

export const changeCat = createAction(ActionType.CHANGE_CAT, (cat) => ({
  payload: cat,
}))
