import { INCREMENT, DECREMENT } from "../actionTypes";

// It's action creator.
// actions => reducers
export const increment = () =>{
	return {
			type: INCREMENT,
	}
}

export const decrement = () =>{
	return {
			type: DECREMENT,
	}
}