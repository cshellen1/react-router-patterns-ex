import React from 'react';

function Dog({ dog }) {
  
  return (
		<div>
			<h1>{dog.name}</h1>
			<img src={dog.src} />
		</div>
	);
}

export default Dog