import { CHANGE_FLAG_MENU } from "../actions";
export const menuFlag = (state = { flagMenu: false }, action) => {
      switch(action.type) {
            case CHANGE_FLAG_MENU:
            return {...state, flagMenu: !state.flagMenu}
            default: return state;
      }
}