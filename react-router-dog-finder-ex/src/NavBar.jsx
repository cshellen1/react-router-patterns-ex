import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

function NavBar({dogs}) {
  return (
		<nav>
			{dogs.map((dog) => (
				<li>
          <NavLink className="navbar" to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
        </li>
			))}
    </nav>
)}

export default NavBar