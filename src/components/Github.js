import React, { useState, useEffect } from "react";
import ErrorImage from "../assets/img/404-Error-Page.jpg";
import { GrGithub } from "react-icons/gr";
import { motion } from "framer-motion";
const Github = () => {
	const [name, setName] = useState("");
	const [avatar, setAvatar] = useState("");
	const [publicrepo, setPublicrepo] = useState("");
	const [loginInput, setLoginInput] = useState("example");
	const [url, setUrl] = useState("https://api.github.com/users/example");
	const [error, setError] = useState("");
	const handleChange = (e) => {
		console.log(e.target.value);
		setLoginInput(e.target.value);
	};
	const handleSubmit = () => {
		setError("");
		fetch(`https://api.github.com/users/${loginInput}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message === "Not Found") {
					setError(data.message);
					console.log(error);
					setLoginInput("");
				} else {
					setData(data);
					setLoginInput("");
				}
			})
			.catch((err) => console.log(err));
		console.log("clicked button");
	};
	const handleSubmitKey = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			console.log(e.keyCode);
			handleSubmit();
			console.log("key handle value" + e.target.value);
		} else {
			console.log("not Working");
		}
	};
	useEffect(() => {
		const url = `https://api.github.com/users/example`;
		fetch(url)
			.then((res) => res.json())
			// .then((data) => console.log(data))
			.then((data) => {
				setData(data);
				// setName(data.name)
			});
		setLoginInput("");
		// console.log(setData)
	}, []);
	const setData = ({ name, avatar_url, public_repos, html_url }) => {
		setName(name);
		setAvatar(avatar_url);
		setPublicrepo(public_repos);
		setUrl(html_url);
	};

	return (
		<div className='bg-red-300'>
			<h1 className='font-mono text-center text-3xl p-5'>Github Profile</h1>
			<div className='flex flex-row justify-center '>
				<input
					className='bg-gray-300 p-2 border-2 rounded-xl shadow-2xl mx-2 my-1.5
                  bg-opacity-80 focus:opacity-90 focus:outline-none focus:ring focus:border-blue-300'
					type='text'
					placeholder='Search'
					value={loginInput}
					onChange={handleChange}
					onKeyDown={handleSubmitKey}
				/>
				<motion.button
					className='bg-blue-300 hover:bg-green-300 p-2 border-2 rounded-xl shadow-2xl mx-1 my-1.5
          bg-opacity-80 focus:opacity-90 uppercase  focus:outline-none'
					// className='p-10 bg-gray-300 w-auto h-4 m-2'
					onClick={handleSubmit}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 100 }}
				>
					submit
				</motion.button>
			</div>
			{error === "Not Found" ? (
				<div className={{ width: "384px", height: "384px" }}>
					<img src={ErrorImage} alt='404...' />
				</div>
			) : (
				<div>
					<h1 className='font-sans p-5 text-green-600 font-extrabold font text-xl underline capitalize'>
						{name}
					</h1>
					{/*  */}
					<img src={avatar} alt='avatar' />
					<div className='p-3'>
						<p className='text-white py-2 font-mono'>
							Total Public Repo: {publicrepo}
						</p>
						<div
							className=' shadow-md rounded-full h-8  w-8  flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-500 cursor-pointer transition duration-500 ease-in-out
            transform hover:-translate-y-1 hover:scale-110
            '
						>
							<a href={url} rel='noreferrer' target='_blank'>
								<GrGithub />
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Github;
