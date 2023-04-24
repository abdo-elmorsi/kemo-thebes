import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
	const [user, setUser] = useState({});
	const usenavigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (!user) {
			usenavigate("/login");
		} else {
			setUser(user);
		}
	}, []);

	return (
		<>
			<Header user={user} />
			<div className="pt-5 mt-5">
				{children}
			</div>
			<Footer />
		</>
	)
}