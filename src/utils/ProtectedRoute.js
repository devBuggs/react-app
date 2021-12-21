import React from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const ProtectedRoute = ({ component: Component }) => {
	const user = useSelector((state) => state.auth.value);
	console.log("user", user);

	const navigate = useNavigate();
	return (
		<>
			<Route render={(props) => {
				if (user) {
					return <Component {...props} />;
				} else {
					return navigate("/");
				}
			}}
			/>
		</>
	);
};

export default ProtectedRoute;
