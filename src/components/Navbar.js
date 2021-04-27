import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { BsJustify } from "react-icons/bs";

import "../portfolio.css";
import { motion } from "framer-motion";
function Navbar({ user }) {
	const [isClicked, setIsClicked] = useState(false);
	const handleClick = () => {
		!isClicked ? setIsClicked(true) : setIsClicked(false);
	};

	const [isClickNav, setIsClickNav] = useState(false);
	return (
		<>
			{/* flex  flex-wrap justify-around  flex-row p-3 text-lg font-mono  */}
			{/* w-28 rounded text-center cursor-pointer items-center
				 hover:bg-yellow-300  */}
			<div className='navbar'>
				<div className='nav-container'>
					<div className='nav-logo'>Shubham</div>
					<nav
						className={isClickNav ? "nav-menu active" : "nav-menu"}
						// style={{ background: "linear-gradient(#FF4E50, #F9D423)" }}
					>
						<motion.div
							className='nav-item '
							// whileHover={{ scale: 1.1 }}
							// whileTap={{ scale: 0.9 }}
							// transition={{ type: "spring", stiffness: 100 }}
						>
							<Link to='/' className='p-3'>Home</Link>
						</motion.div>

						<motion.div
							className='nav-item '
							// whileHover={{ scale: 1.1 }}
							// whileTap={{ scale: 0.9 }}
							// transition={{ type: "spring", stiffness: 100 }}
						>
							<Link to='/portfolio' className='p-3'>Portfolio</Link>
						</motion.div>

						<div className='nav-item-img transform translate-y-1'>
							<div
								className='shadow-md rounded-full h-8 w-10 flex items-center justify-center transition duration-500 ease-in-out
            transform  hover:scale-110 hover:rotate-360'
							>
								<img
									className='rounded-full cursor-pointer'
									src={user.picture}
									alt={user.name}
									onClick={handleClick}
								/>
							</div>
							<div className='logout click-logout'>
								{isClicked ? <LogoutButton /> : null}
							</div>
						</div>
					</nav>
					<div className='nav-icon' onClick={() => setIsClickNav(!isClickNav)}>
						<BsJustify />
					</div>
				</div>
			</div>
			{/* style={{top:'0',right:'-2.2rem'}} */}
		</>
	);
}

export default Navbar;
