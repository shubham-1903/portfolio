import React, { useState } from "react";
import Wheather from "./Wheather";
import Wheather2 from "./Wheather2";
import Setdata from "./Setdata";
import Github from "./Github";
import BlinkText from './BlinkText'
import Background from "../assets/img/cold.jpeg";

function ProjectPage() {
	const [temp, setTemp] = useState(0);
	React.useEffect(() => {
		console.log("useEffect app");
	});
	const tempVal = (val) => {
		console.log("value: " + val);
		return val;
	};
	return (
		<>
			<div className='container bg-blue-100 mx-auto '>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-items-center my-2 shadow-2xl '>
					<div className='bg-gray-400 justify-center my-2 rounded-md'>
						<Wheather />
					</div>
					<div className='bg-pink-300 shadow-xl my-2 rounded-md bg-no-repeat bg-cover'>
						<Setdata />
					</div>
					<div
						className='shadow-xl my-2 rounded-md bg-no-repeat bg-cover select-none'
						style={{
							backgroundImage: `url(${Background})`,
						}}
					>
						<Wheather2 changeTemp={(temp) => setTemp(temp)} />
					</div>
					<div className='bg-pink-600 w-96 shadow-xl my-2 rounded-md bg-no-repeat bg-cover select-none'>
						<Github />
					</div>
					<div className='bg-pink-600 w-96 shadow-xl my-2 rounded-md bg-no-repeat bg-cover select-none'>
						<BlinkText />
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectPage;
