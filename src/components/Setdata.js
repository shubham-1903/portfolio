import React, { useState, useEffect } from "react";
import Form from "./Form";
import '../App.css'

function Setdata() {
  // const myStyle={
  //   ::-webkit-scrollbar :
  //    "width: 2px";
  //   ::-webkit-scrollbar-track :
  //     background: green;
  // };
	const [data, setData] = useState([
		{ name: "shubham", id: 1 },
		{ name: "virat", id: 2 },
		{ name: "ubnax", id: 3 },
	]);

	const addName = (name) => {
		setData([...data, { name, id: 6 }]);
	};
	useEffect(() => {
		console.log("useEffect1");
	});
	return (
		<>
			<Form addName={addName} />
			<div className='container mx-auto overflow-auto h-28 scrollbar scrollbar-primary' style={{borderTop: '1px solid black'}}>
				<ul className='text-center font-mono '>
					{data.map((d) => {
						return <li key={d.id} className='hover:text-purple-800 hover:italic cursor-pointer'>{d.name}</li>;
					})}
				</ul>
				{/* <button onClick={addName}>Add name</button> */}
			</div>
		</>
	);
}

export default Setdata;
