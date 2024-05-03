import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 container" style={{ backgroundColor: "transparent" }}>
			<Link to="/">
				<img src="https://i.imgur.com/J9gCPxp.png" alt="Home" style={{ maxHeight: "8rem" }} id="starWarsLogo" />
			</Link>
			<div className="Favorites text-light"> Favorites </div>
		</nav>
	);
};
