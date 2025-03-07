import React from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import "./App.css";
import Dogs from "./Dogs";
import NavBar from "./NavBar";
import DogFilter from "./DogFilter";
import duke from "./dog-pics/duke.jpg";
import perry from "./dog-pics/perry.jpg";
import tubby from "./dog-pics/tubby.jpg";
import whiskey from "./dog-pics/whiskey.jpg";

function App({ dogs }) {
	return (
		<>
			<BrowserRouter>
				<Routes dogs={dogs}>
					<Route path="/dogs" element={<Dogs dogs={dogs} />} />
					<Route path="/dogs/:name" element={<DogFilter dogs={dogs} />} />
					<Route path="*" element={<Navigate to="/dogs" />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

App.defaultProps = {
	dogs: [
		{
			name: "Whiskey",
			age: 5,
			src: whiskey,
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			src: duke,
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			src: perry,
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			src: tubby,
			facts: [
				"Tubby is really stupid.",
				"Tubby does not like walks.",
				"Angelina used to hate Tubby, but claims not to anymore.",
			],
		},
	],
};

export default App;
