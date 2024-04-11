import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

function Color({ colors }) {

	const colorName = useParams();

	const [color] = colors.filter((c) => {
		return c.name === colorName.name;
	});
	
	if (color) {
		return (
			<div
				style={{
					backgroundColor: color.hex,
					width: "100vw",
					height: "100vh",
				}}>
				<h4>{color.name}</h4>
				<Link to="/colors">Home</Link>
			</div>
		);
	}
	else {
		return <Navigate to="/colors" />;
	}
}
export default Color