import React, { useEffect, useState } from "react";
const Profile = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setUser(JSON.parse(user));

		}
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
						<div className="col-md-6">
							<h2 className="featurette-heading">
								First featurette heading.{" "}
							</h2>
							<p className="lead">
								Some great placeholder content for the first
								featurette here. Imagine some exciting prose
								here.
							</p>
						</div>
						<div className="col-md-6">
							<h2 className="featurette-heading">
								First featurette heading.{" "}
							</h2>
							<p className="lead">
								Some great placeholder content for the first
								featurette here. Imagine some exciting prose
								here.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profile;
