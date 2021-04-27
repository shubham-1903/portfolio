import React, { useState, useEffect } from "react";

function Wheather2(props) {
	const [data, setData] = useState("");
	const [posts, setPosts] = useState(null);
	const [city, setCity] = useState("ara");
	const [temp, setTemp] = useState(0); 
	const [error, setError] = useState("");
	const api = {
		keys: "2ce2ce87475a1a63e1444682111b5eb4",
		base: "https://api.openweathermap.org/data/2.5/",
		// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
	};
	// const setVal = () => {
	// 	if (!posts) {
	// 		return setTemp(10);
	// 	} else {
	// 		console.log("setVa:" + temp);
	// 		return setTemp(posts.main.temp);
	// 	}
	// };
	const handleClick = () => {
		console.log("Clicked");
		if(error==="city not found" || city==="") {
			setError("")
			setCity("ara")
		}else {
			setCity(data);
			setTemp(posts.main.temp);
		}
		// console.log(posts.main.temp);
		// setVal();
		console.log("temp1: " + temp);
		props.changeTemp(temp);
	};
	useEffect(() => {
		console.log("Wheather2");
		setTemp(0);
		const url = `${api.base}weather?q=${city}&units=metric&appid=${api.keys}`;
		fetch(url, { method: "GET" })
			.then((res) => res.json())
			.then((d) =>{
				if(d.cod==="404"){
					setError(d.message);
				}else{
					setPosts(d)
				}
			}
				// console.log("data: " + res)
			)
			.catch((err) => console.log(err));
		setData("");
	}, [api.base, api.keys, city]);
	return (
		<>
			<h1 className='text-center font-medium text-5xl italic p-3 uppercase font-mono text-blue-900'>
				W<span className='text-4xl font-serif'>eather</span>
			</h1>
			<div className='flex flex-col'>
				<div className='flex flex-row'>
					<input
						className='bg-gray-300 p-2 border-2 rounded-xl 
						shadow-2xl mx-1 my-1.5 bg-opacity-80 focus:opacity-90 focus
						focus:outline-none'
						type='text'
						value={data}
						placeholder='Search'
						onChange={(e) => {
							setData(e.target.value);
						}}
					/>
					<button
						className='bg-red-200 hover:bg-red-400 font-mono text-red-900 rounded-lg shadow-2xl mx-2 my-1.5 p-1 h-10 '
						onClick={handleClick}
					>
						Enter
					</button>
				</div>
				{error==="city not found" || city==="" || posts===null ? (
					<p>No data found</p>
				) : (
					// <div className='flex flex-col justify-center content-center'>
					<div className='text-center font-semibold text-lg p-3  uppercase font-serif text-black'>
						<h1 className='text-yellow-700 text-2xl'>{posts.name}</h1>
						<h3>{`temp: ${temp} \u00B0C`}</h3>
						<h3>{`humidity: ${posts.id}`}</h3>
					</div>
					// </div>
				)}
			</div>
		</>
	);
}

export default Wheather2;
