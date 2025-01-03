import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end">
			<Link to="/add-contact">
				<button className="btn btn-primary"> Agregar Contactos </button>
			</Link>
		
		</nav>
	);
};
