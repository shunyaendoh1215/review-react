import React from 'react';
import "./About.scss";

// for react hooks
import {useMyContext} from '../hooks/provider';
import { INCREMENT, DECREMENT } from "../hooks/actionTypes";

import { Button } from "../components/StyledButton";

const About = () => {
	const [state, dispatch] = useMyContext();

	return (
		<div className='about'>
			<section>
				<h1>This is an about page</h1>
			</section>
			<section className='counter'>
				<h1>It's a counter by using React Hooks.</h1>
				<h3>
					{state.count}
				</h3>
				<div className='btn-wrapper'>
					<Button onClick={() => dispatch({type: INCREMENT})} value={'+'}/>
					<Button onClick={() => dispatch({type: DECREMENT})} value={'-'}/>
				</div>
			</section>
		</div>
	);
};

export default About;