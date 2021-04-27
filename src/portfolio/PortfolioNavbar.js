import React from "react";
import { Link } from "react-router-dom";


const PortfolioNavbar = () => {
	return (
		<>
			<nav className='bg-green-500 flex justify-around'>
				<Link to='/'>Home </Link>
				<Link to='/portfolio/about'>About Me</Link>
				<Link to='/portfolio/projects'>Project</Link>
				<Link to='/portfolio/contact'>Contact Me</Link>
			</nav>
		</>
	);
};

export default PortfolioNavbar;
