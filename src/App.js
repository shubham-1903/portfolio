import React from "react";
// import { Switch, Route } from "react-router-dom";
// import ProjectPage from "./components/ProjectPage";
// import Portfolio from "./components/Portfolio";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import NavbarP from "../src/portfolio/NavbarP"
import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
	const { isAuthenticated, isLoading } = useAuth0();
	if (!isAuthenticated || isLoading) {
		return <LoginButton />;
	} else if (isLoading) {
		<div className=''>Loading....</div>;
	} else {
		return (
			<>
				{/* <LoginButton /> */}
				{/* <LogoutButton /> */}
				<Profile />
				{/* <Navbar />
			<Switch>
				<Route path='/' component={ProjectPage} exact />
				<Route path='/portfolio' component={Portfolio} exact />
			</Switch>
			<Footer /> */}
			</>
		);
	}
}

export default App;
