import React from 'react';
import styled from 'styled-components'

export const Button = (props) => {
	return (
		<Wrapper>
			<button onClick={props.onClick}>{props.value}</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	& > button {
    background: #42a7b9;
    color: #fff;
    font-weight: bold;
    font-size: 1.4em;
    border-radius: 20%;
    border: solid 2px #2c3e50;
    width: 40px;
    height: 40px;
    line-height: 40px;
	}
`