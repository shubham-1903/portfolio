import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../portfolio.css";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className='container h-screen w-full m-auto  flex justify-center items-center'>
			<div className='flex flex-col justify-center content-center glassy rounded-md shadow-lg h-2/4 w-1/3 '>
				<h1 className='text-3xl font-mono p-1 uppercase my-2 flex items-start text-center  mx-auto text-gray-300'>
					LogIn/SignIn
				</h1>
				<div className='flex justify-center'>
					<button
						className='gradient hover:bg-red-400 font-mono text-red-900 rounded-lg shadow-2xl mx-2 my-1.5 p-1 h-10 w-28
						cursor-pointer transition duration-500 ease-in-out
            transform  hover:scale-110 focus:outline-none'
						onClick={() => loginWithRedirect()}
					>
						Log In
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginButton;
