import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../containers/home/HomePage';


// document.addEventListener('DOMContentLoaded', () => {
// const node = document.getElementById('json')
// const payload = JSON.parse(document.getElementById.getAttribute('payload'))
// })


ReactDOM.render(
	<React.StrictMode>
			<HomePage />
	</React.StrictMode>,
	document.getElementById('homeContainer')
);
