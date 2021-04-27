import React from "react";
import Background from "../assets/portfolio-img/pic2.jpg";
import Progress from "./Progress";
import { motion } from "framer-motion";
import ProjectSection from "./ProjectSection";
import "../portfolio.css";
const containerVarients = {
	hidden: {
		opacity: 0,
		x: "-100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", delay: 0.5 },
	},
};
function About() {
	return (
		<>
			<section className='glassy p-1'>
				<header className='text-center uppercase text-3xl md:text-5xl  p-3'>
					<h1 className='font_style_2'>
						a little bit <span className='text-indigo-500'>About me</span>
					</h1>
				</header>
				<section className='grid grid-cols-2 container mx-auto uppercase relative '>
					<div className='flex justify-end'>
						<img
							className='neo1 rounded-full h-40 '
							src={`${Background}`}
							alt='...'
						/>
					</div>
					<div className='p-2'>
						<ul className='flex flex-col text-black font_style_1 font-semibold py-3'>
							<li className=' p-1'>
								Date of birth:
								<span className='col_1 font-normal '>19TH March, 2002</span>
							</li>
							<li className='p-1'>
								Language:
								<span className='col_1 font-normal'> English,Hindi</span>
							</li>
							<li className='p-1'>
								Expert in:
								<span className='col_1 font-normal'> frontend</span>
							</li>
							<li className='p-1'>
								freelance:<span className='col_1 font-normal'> available</span>
							</li>
						</ul>
					</div>
				</section>
			</section>
			<motion.section
				className='container mx-auto'
				variants={containerVarients}
				initial='hidden'
				animate='visible'
			>
				<h2 className=' uppercase font_style_2 text-3xl md:text-5xl font-bold p-2 text-center'>
					Skills
				</h2>
				<div className='glassy m-1 shadow-xl rounded-md'>
					<Progress />
				</div>
			</motion.section>
			<section>
				<h2
					className='uppercase font_style_2 text-3xl md:text-5xl
					font-bold p-2 text-center'
				>
					Projects
				</h2>
				{/* <div className='p-3 flex justify-center  mx-auto bg-white'>
					<Project/>
				</div> */}
				<div className='p-3  mx-auto glassy'>
					<ProjectSection />
				</div>
			</section>
		</>
	);
}

export default About;
