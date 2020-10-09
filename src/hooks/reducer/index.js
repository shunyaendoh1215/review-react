import { INCREMENT, DECREMENT } from "../actionTypes";

export const initState = {
	count: 0,
};

const reducer = (state, action) => {
	// you can get param form action.payload.
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}

export default reducer;

