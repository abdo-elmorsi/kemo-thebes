import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Profile = () => {
	const [user, setUser] = useState({});
	const [loading, setloading] = useState(true);
	const [researches, setResearches] = useState([]);

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setUser(JSON.parse(user));
		}

		axios
			.get("http://localhost:3001/research")
			.then((res) => {
				setResearches(res.data);
			})
			.catch((error) => {
				toast.error("No researches");
			})
			.finally(() => {
				setloading(false);
			});
	}, []);




	return (
		<div>
			<main role="main">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6">
							<p>UserName: {user?.name}</p>
							<p>Email: {user?.email}</p>
							<p>Phone Number: {user?.phone}</p>
							<p>Address: {user?.address}</p>
							<p>Your Research</p>
						</div>
					</div>
					<div className="row justify-content-around">
						{loading ? (
							<div>{"loading..."}</div>
						) : (
							researches?.map((ele) => {
								return (
									<div key={ele?.id} className="col-md-6">
										<h2 className="featurette-heading">
											{ele?.id}
										</h2>
										<p className="lead">{ele?.desc}</p>
									</div>
								);
							})
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profile;
