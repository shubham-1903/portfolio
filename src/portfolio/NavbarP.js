import React from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import { Router, Switch, Route } from "react-router-dom";
import PortfolioNavbar from "./PortfolioNavbar";

const NavbarP = () => {
	return (
		<>
			<Router>
				<PortfolioNavbar />
				<Switch>
					<Route path='/portfolio' exact component={Header} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</Router>
		</>
	);
};

export default NavbarP;
