import { INSERT } from '../actions';

export const dorsMannage = (state = { doors: [], categories: [] }, action) => {
      switch(action.type) {
            case INSERT: 
                var categories = [] 
                var flag = false;
                action.payload.forEach((data) => {
                      categories.forEach((category) => {
                            if(data.category === category){
                                  flag = true;
                            }
                      });
                      if(!flag){
                            categories.push(data.category);
                      }
                      flag = false;
                });
                return {...state, doors: action.payload, categories: categories};
            default: return state;
      }
}

