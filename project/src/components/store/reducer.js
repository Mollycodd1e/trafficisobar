import {combineReducers} from 'redux';
import {changer} from './changer/changer.js';

export const NameSpace = {
  CHANGER: 'CHANGER',
};

export default combineReducers({
  [NameSpace.CHANGER]: changer,
});
