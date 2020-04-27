import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';

function App() {
	const url = `https://ghibliapi.herokuapp.com/films`;
	fetch(url)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
		})
		.catch(console.error);

	return (
		<div className='App'>
			<Homepage />
		</div>
	);
}

export default App;
