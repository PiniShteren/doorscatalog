import { CHANGE_FLAG, PRODUCT } from "../actions";
export const productData = (state = { product: {}, flag: false }, action) => {
	switch (action.type) {
		case PRODUCT:
			return { ...state, product: action.payload };
		case CHANGE_FLAG:
			return { ...state, flag: !state.flag };
		default:
			return state;
	}
};
