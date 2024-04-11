import React from 'react'
import { Link } from 'react-router-dom';

function Colors({ colors }) {
  
  const colorLinks = colors.map((c) => (
    <Link className="color-links" key={c.hex} to={`/colors/${c.name}`}>{c.name}</Link>
	));

  return (
		<div>
			<h4>Welcome to the color factory!</h4>
			<Link to="/colors/new">Add a color</Link>
			<p>Please select a color</p>
			<ul>{colorLinks}</ul>
		</div>
	);
}

export default Colors