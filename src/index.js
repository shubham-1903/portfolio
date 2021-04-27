import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
	<BrowserRouter>
		<Auth0Provider
			domain="dev-zi3abf69.us.auth0.com"
			clientId="MduyHIN5SMcOp4LAqn1dIyr8lVtNSwIh"
			redirectUri="https://dreamy-goldstine-0971bd.netlify.app/"
		>
			<App />
		</Auth0Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
reportWebVitals();
