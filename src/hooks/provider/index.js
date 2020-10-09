import React, {useContext} from 'react';

const context = React.createContext({});
export const HooksProvider = context.Provider;

export const useMyContext =  () => {
	const myContext = useContext(context);
	return [
		myContext[0], // state
		myContext[1], // dispatch
	]
}