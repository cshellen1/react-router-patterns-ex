import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewColorForm({addColor}) {

  const INITIAL_STATE = {
    name: 'green',
    hex: '#09e042'
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const navigate = useNavigate();


  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
  };
  
  const handleSubmit = (e) => {
	  e.preventDefault();
    addColor({ ...formData });
    navigate("/colors");
	};



	return (
		<div>
			<form>
				<div>
          <label htmlFor="name">Color name: </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter color name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value: </label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={formData.hex}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
}

export default NewColorForm;
