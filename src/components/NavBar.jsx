import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


const Navbar = (props) => {
	const navigate = useNavigate();
	// const auth = useLocation();
	const auth = props.auth;

	return (
		<div>
			<button onClick={navigate("/")}>Home</button>
			<button onClick={navigate("/login")}>Login</button>
			<button onClick={navigate("/register")}>Register</button>
			<button onClick={navigate("/reset")}>Reset Password</button>
			<button onClick={navigate("/dashboard")}>Dashboard</button>
			<button onClick={() => {
				signOut(auth)
					.then(() => {
						console.log("user signed out");
					})
					.catch((error) => {
						console.log("error", error);
					});
			}}>Log Out</button>
		</div>
	);
}

export default Navbar;