import React, { useState } from "react";

function Form({ addName }) {
	const [name, setName] = useState("");
	const handleChangeName = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addName(name);
		setName("");
	};
	return (
		<>
			<form onSubmit={handleSubmit} className='text-center '>
				<label className='p-1 text-center bg-yellow-200 text-2xl font-serif my-2 text-green-600 bg-transparent'>
					Todos:
				</label>
				<br />
				<input
					className='bg-gray-300 p-2 border-2 rounded-xl shadow-2xl mx-2 my-1.5
                bg-opacity-80 focus:opacity-90 focus:outline-none focus:ring focus:border-blue-300'
					type='text'
					value={name}
					placeholder='Name'
					required
					onChange={handleChangeName}
				/>

				<input
					type='submit'
					value='Add'
					className='bg-gray-300 p-2 border-2 rounded-xl shadow-2xl mx-1 my-1.5
				bg-opacity-80 focus:opacity-90'
				/>
			</form>
		</>
	);
}

export default Form;
