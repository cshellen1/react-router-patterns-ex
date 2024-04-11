import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';



function Dogs({ dogs }) {
  return (
		<div>
			<h1>Dogs</h1>
			<NavBar dogs={dogs} />
			{dogs.map(dog => (
				<div key={dog.name}>
					<h2>{dog.name}</h2>
					<img src={dog.src} alt="image of dog" />
					<br/>
				</div>
			))}
		</div>
	);
}

export default Dogs