import { INCREMENT, DECREMENT } from "../actionTypes";

const initState = {
	count: 0,
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1,
			};
			case DECREMENT:
				return {
					count: state.count - 1,
				};
		default:
			return state;
	}
};

// if you have multi reducers, just use combineReducers() from 'redux'.
// const combinedReducer = combineReducers({
// count: count_reducer,
// user: user_reducer,
// });
// and then, you can use state.count.count or state.user.id

export default reducer;