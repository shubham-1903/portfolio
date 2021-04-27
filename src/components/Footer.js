import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer className='h-auto' style={{background: 'linear-gradient(#FF4E50, #F9D423)'}}>
				<ul
					className='flex sm:flex-row flex-col sm:justify-evenly
				p-4 mx-auto capitalize font-serif'
				>
					<li className='text-center hover:text-yellow-700'>
						© 2021 IconArchive.com
					</li>
					<li className='cursor-pointer text-center hover:text-white'>
						<Link to='/about'>about</Link>
					</li>
					<li className='cursor-pointer text-center hover:text-white'>
						<Link to='/contact'>contact us</Link>
					</li>
					<li className='cursor-pointer text-center hover:text-white'>
						Terms and Conditions
					</li>
					<li className='cursor-pointer text-center hover:text-white'>
						privacy policy
					</li>
				</ul>
			</footer>
		</>
	);
}

export default Footer;
