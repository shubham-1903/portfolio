import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./portfolio/About";
import Contact from "./portfolio/Contact";
import { useAuth0 } from "@auth0/auth0-react";

import { VscLoading } from "react-icons/vsc";
function Profile() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	if (isLoading) {
		return (
			<div style={{height:'100vh', width:'100vw'}} className='flex-row justify-center align-middle'>
				<VscLoading style={{height:'200px', width:'200px'}}/>
			</div>
		);
	}
	return (
		isAuthenticated && (
			<>
				<Navbar user={user}/>
				<Switch>
					<Route path='/' component={ProjectPage} exact />
					<Route path='/portfolio' component={Portfolio} exact />
					<Route path='/about' component={About}/>
					<Route path='/contact' component={Contact}/>
				</Switch>
				<Footer />
			</>
		)
	);
}

export default Profile;
