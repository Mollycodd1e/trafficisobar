import {createReducer} from '@reduxjs/toolkit';
import {PAGES} from '../../../const.js';
import {changePage, changeCat} from '../action.js';

const initialState = {
  activePage: PAGES[0].page,
  cat: 'img/cat.png',
};

const changer = createReducer(initialState, (builder) => {
  builder
    .addCase(changePage, (state, action) => {
      state.activePage = action.payload;
    })
    .addCase(changeCat, (state, action) => {
      state.cat = action.payload;
    });
});

export {changer};
