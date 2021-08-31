import { combineReducers } from 'redux';
import {dorsMannage} from "./doors";
import { changeCategoryData } from './category';
import {productData} from './product';
import { menuFlag } from './menu';

export default combineReducers({
      doors: dorsMannage,
      category: changeCategoryData,
      product: productData,
      flagMenu: menuFlag
})