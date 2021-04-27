import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
function SocialIcon({ h, w }) {
	return (
		<>
			<ul className='flex flex-row gap-1 opacity-90 my-1'>
				<li
					className={`bg-white shadow-md rounded-full h-${h}  w-${w} flex items-center justify-center
																		transition duration-500 ease-in-out
																		transform hover:scale-110
																		hover:bg-blue-700`}
				>
					<a
						href='https://www.facebook.com/profile.php?id=100008606535834'
						rel='noreferrer'
						target='_blank'
					>
						<FiFacebook />
					</a>
				</li>
				<li
					className={`bg-white shadow-md rounded-full h-${h}  w-${w} flex items-center justify-center 										transition duration-500 ease-in-out
										transform hover:scale-110 hover:bg-indigo-400`}
				>
					<a
						href='https://www.linkedin.com/in/shubham-kumar-13a9051a9/'
						rel='noreferrer'
						target='_blank'
					>
						<FaLinkedinIn />
					</a>
				</li>
				<li
					className={`bg-white shadow-md rounded-full h-${h}  w-${w} flex items-center justify-center 										transition duration-500 ease-in-out
										transform hover:scale-110 hover:bg-gray-500`}
				>
					<a
						href='https://github.com/shubham-1903'
						rel='noreferrer'
						target='_blank'
					>
						<GrGithub />
					</a>
				</li>
				<li
					className={`bg-white shadow-md rounded-full h-${h}  w-${w} flex items-center justify-center 										transition duration-500 ease-in-out
										transform hover:scale-110 hover:bg-red-600`}
				>
					<a
						href='https://www.instagram.com/shubhamkumar1958/'
						rel='noreferrer'
						target='_blank'
					>
						<FiInstagram />
					</a>
				</li>
				<li>
					<a
						href='https://twitter.com/8b6bb3c198d34f1'
						className={`bg-white shadow-md rounded-full h-${h}  w-${w} flex items-center justify-center 										transition duration-500 ease-in-out
										transform hover:scale-110 hover:bg-indigo-600`}
						rel='noreferrer'
						target='_blank'
					>
						<FiTwitter />
					</a>
				</li>
			</ul>
		</>
	);
}

export default SocialIcon;
