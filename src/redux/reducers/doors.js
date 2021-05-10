import { INSERT } from '../actions';
import axios from 'axios';

const store = (state = { doors: '' }, action) => {

      switch (action.type) {
            case INSERT:
                  let flag = false;
                  let categories = [];
                  action.payload.forEach((e) => {
                        flag = false;
                        categories.forEach((category) => {
                              if (e.category == category) {
                                    flag = true;
                              }
                        });
                        if (!flag) {
                              categories.push(e.category);
                        }
                  });
                  return { doors: action.payload, categories: categories }
            default:
                  return state;
      }
}
export default store;
