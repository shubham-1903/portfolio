import React from "react";
import { Link } from "react-router-dom";
import "../portfolio.css";
import { motion } from "framer-motion";
import Background from "../assets/portfolio-img/34.jpg";
import SocialIcon from "./SocialIcon";

function Header() {
	return (
		<>
			<header
				className='pt-12 bg-fixed bg-no-repeat  h-screen-2 header_img border_style bg-cover'
				style={{ backgroundImage: `url(${Background})` }}
			>
				<div className='container mx-auto '>
					<div className='grid grid-cols-1 md:grid-cols-2 justify-items-stretch'>
						<motion.div
							className='border_style_1 px-4 py-16 text-left   border-opacity-100'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 1.5 }}
						>
							<h1 className='uppercase font_style_1'>Hey there !</h1>
							<h2 className='uppercase text-2xl  md:text-5xl font_style_2'>
								i am shubham
							</h2>
							<p className='font-mono uppercase text-white'>
								full stack developer & problem solver{" "}
							</p>
							<motion.button
								className='border-none outline-none neo my-2 w-28 h-9 text-sm text-white rounded-sm uppercase 
                    bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
                    shadow-lg focus:outline-none
										'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
							>
								<Link to='/contact'>contact us</Link>
							</motion.button>
							<SocialIcon h={6} w={6} />
						</motion.div>
						<div className='  border-opacity-100'></div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
