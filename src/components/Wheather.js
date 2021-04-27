import React, { useState, useEffect } from "react";

function Wheather() {
	const [data, setData] = useState(1);
	const [posts, setPosts] = useState({});
	const [titles, setTitles] = useState(1);
	const change = (e) => {
		console.log(e.target.value);
		setData(e.target.value);
		// setTitles(false);
		// console.log(`title ${titles}`);
		console.log(`data ${data}`);
	};
	const handleClick = () => {
		console.log("title: " + titles);
		setTitles(data);
	};
	useEffect(() => {
		console.log("useEffect random text api testing");
		const url = `https://jsonplaceholder.typicode.com/posts/${titles}`;
		fetch(url)
			.then((res) => res.json())
			// .then((res) =>console.log(res))
			.then((d) => setPosts(d))
			.catch((err) => console.log(err));
		setData("")
	}, [titles]);
	return (
		<>
			<h1 className='text-yellow-200 text-lg p-2 text-center'>
				Random Text Fetch Api Testing
			</h1>
			<input
				className='bg-gray-300 p-2 border-2 rounded-xl 
						shadow-2xl mx-1 my-1.5 bg-opacity-80 focus:opacity-90 focus
						focus:outline-none'
				type='text'
				placeholder='search'
				value={data}
				onChange={change}
			/>
			<button
				type='button'
				className='bg-red-200 hover:bg-red-400 font-mono text-red-900 rounded-lg shadow-2xl mx-2 my-1.5 p-1 h-10 '
				onClick={handleClick}
			>
				Search
			</button>
			<div className='text-blue-800 text-center text-lg font-mono italic'>
				{posts.title}
				{/* <ul className='text-blue-800 text-center text-lg font-mono italic'>
					{posts.map((d) => {
						return <li key={d.id}>{d.name}</li>;
					})}
				</ul> */}
			</div>
		</>
	);
}

export default Wheather;
