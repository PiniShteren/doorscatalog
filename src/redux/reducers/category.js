import {CHANGE_CATEGORY} from '../actions'
export const changeCategoryData = (state={category: ''}, action) => {
      switch(action.type) {
            case CHANGE_CATEGORY:
                  return {...state, category: action.payload};
                  default: return state;
      }
}