import React from 'react';
import Logo from "./images/logo.svg";
import './Home.scss';

const LogoImg = () => <img src={Logo} alt='react_logo' className='react-logo'/>

const Home = () => {
	return (
		<div className='home'>
			<LogoImg />
			<div className='hello'>
				<section>
				<h1>Welcome to Your React App</h1>
					<p>
					For a guide and recipes on how to configure / customize this project, <br/>
					check out the <a rel="noreferrer noopener" target='_blank' href='https://reactjs.org/'>reactjs documentation</a>.
					</p>
				</section>
				<section>
					<h3>Installed Plugins</h3>
					<ul className='plugin-list'>
						<li><a rel="noreferrer noopener" target='_blank' href='https://github.com/ReactTraining/react-router'>router</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://github.com/reduxjs/react-redux'>Redux</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://github.com/eslint/eslint'>eslint</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://github.com/styled-components/styled-components'>styled-component</a></li>
					</ul>
				</section>
				<section>
					<h3>Essential Links</h3>
					<ul className='plugin-list'>
						<li><a rel="noreferrer noopener" target='_blank' href='https://reactjs.org/'>Core Docs</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://ja.reactjs.org/community/support.html'>Support</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='http://join.reactiflux.com'>Community Chat</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://twitter.com/reactjs'>Twitter</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://ui.dev/newsletters/react/'>News</a></li>
					</ul>
				</section>
				<section>
					<h3>Ecosystem</h3>
					<ul className='plugin-list'>
						<li><a rel="noreferrer noopener" target='_blank' href='https://reactrouter.com/'>react router</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://react-redux.js.org/'>Redux</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper'>React Hooks</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://ja.reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler'>React DevTools</a></li>
						<li><a rel="noreferrer noopener" target='_blank' href='https://github.com/enaqx/awesome-react'>awesome-react</a></li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default Home;