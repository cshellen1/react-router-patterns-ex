import React, {useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Colors from "./Colors";
import Color from './Color';
import NewColorForm from './NewColorForm';

function RouteList() {

  const INITIAL_STATE = [
    { name: 'blue', hex: '#1107d9' },
    { name: 'green', hex: '#08c444' },
    { name: 'purple', hex: '#f007f0' }
  ]

  const [colors, setColors] = useState(INITIAL_STATE);

  const addColor = (newColor) => {
    setColors(colors => [...colors, {
      ...newColor
    }]);
  };



	return (
		<Routes>
			<Route path="/colors" element={<Colors colors={colors} />} />
			<Route path="/colors/:name" element={<Color colors={colors} />} />
			<Route
				path="/colors/new"
        element={<NewColorForm
        addColor={addColor} />}
			/>
			<Route path="*" element={<Navigate to="/colors" />} />
		</Routes>
	);
}

export default RouteList;
