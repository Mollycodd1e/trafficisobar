import {NameSpace} from '../reducer.js';

export const getActivePage = (state) => state[NameSpace.CHANGER].activePage;

export const getCat = (state) => state[NameSpace.CHANGER].cat;
