import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOutCircle } from "react-icons/bi";
const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<div className='absolute' >
			<button
				className='bg-red-200 hover:bg-red-400 font-mono text-red-900 
        rounded-full shadow-2xl  h-8 w-8 focus:outline-none'
				onClick={() => logout({ returnTo: window.location.origin })}
			>
				<BiLogOutCircle/>
			</button>
		</div>
	);
};

export default LogoutButton;
