import React from 'react';
import "./Contact.scss";

// for redux
import { connect } from 'react-redux'
import { increment, decrement } from "../redux/actions";

import { Button } from "../components/StyledButton";

const Contact = ( props ) => {
	return (
		<div className='contact'>
			<section>
				<h1>This is a contact page</h1>
			</section>
			<section className='counter'>
				<h1>It's a counter by using Redux.</h1>
				<h3>
					{props.count}
				</h3>
				<div className='btn-wrapper'>
					<Button onClick={props.increment} value={'+'} />
					<Button onClick={props.decrement} value={'-'} />
				</div>
			</section>
		</div>
	);
};

// You can receive only count data.(and actions)
const mapStateToProps = (state) => ({
		count: state.count
})

export default connect(mapStateToProps, {increment, decrement})(Contact);

// export default connect()(Contact);
// -> <button onClick={ e => {props.dispatch({ type: 'INCREMENT' });}}>
// However, you cannot use store data.(In this case, '{props.count}')

// export default connect(null, mapDispatchToProps)(Contact);
// -> function mapDispatchToProps(dispatch) {
//     return { dispatch1: () => { dispatch({ type: 'INC' }); } };
//    }
// -> <button onClick={ e => props.dispatch1()}>