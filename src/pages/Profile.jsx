import axios from "axios";
import moment from "moment";
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



	const [data, setData] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const result = {
			...data,
			user: user.id,
			date: new Date(),
			resources: data.resources ? data.resources.split('\n').filter(e => e) : ""
		}
		axios
			.post("http://localhost:3001/research", result)
			.then((res) => {
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
				toast.error("Failed to add");
			})
	}
	return (
		<>
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
						<div className="row justify-content-start">
							{loading ? (
								<div>{"loading..."}</div>
							) : (
								<>
									<div className="col-12 d-flex justify-content-end align-items-center">
										<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#myLargeModalLabel">
											Add
										</button>
									</div>
									<div className="d-flex justify-content-start align-items-center" style={{ gap: "20px" }}>
										{researches.filter(c => c.user === user.id)?.map((ele, i) => {
											return (
												<div key={i} className="card" style={{ width: "18rem", height: "300px" }}>
													<div className="card-body">
														<h5 className="card-title">{ele?.id}</h5>
														<h6 className="card-subtitle mb-2 text-muted">Start: {ele?.start}</h6>
														<h6 className="card-subtitle mb-2 text-muted">End: {ele?.end}</h6>
														<p className="card-text">Description: {ele?.desc}</p>
														<div>
															{ele.resources.length ?
																ele.resources.map((e, i) => {
																	return (

																		<a key={i} href={`${e}`} className="d-block m-0 card-link">{e}</a>
																	)
																})
																: ""}
														</div>
														<small className="text-muted fs-12">Date: {moment(ele.date).format("YYYY/MM/DD hh:mm")}</small>
													</div>
												</div>
											);
										})}
									</div>
								</>
							)}
						</div>
					</div>
				</main>
			</div>
			{/* modal */}
			<div className="modal fade" id="myLargeModalLabel" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-big modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="modal-body">
								<div className="row">
									<div className="form-group col-4">
										<label htmlFor="exampleInputTitle1">Title</label>
										<input onChange={(e) => {
											setData({
												...data,
												id: e.target.value
											})
										}} value={data.id} type="text" className="form-control" id="exampleInputTitle1" placeholder="Enter title" />
									</div>
									<div className="form-group col-4">
										<label htmlFor="exampleInputDesc1">Description</label>
										<input onChange={(e) => {
											setData({
												...data,
												desc: e.target.value
											})
										}} value={data.desc} type="text" className="form-control" id="exampleInputDesc1" placeholder="Enter description" />
									</div>
									<div className="form-group col-4">
										<label htmlFor="exampleInputStart1">Start</label>
										<input onChange={(e) => {
											setData({
												...data,
												start: e.target.value
											})
										}} value={data.start} type="text" className="form-control" id="exampleInputStart1" placeholder="Enter Start" />
									</div>
									<div className="form-group col-4">
										<label htmlFor="exampleInputSubject1">Subject</label>
										<input onChange={(e) => {
											setData({
												...data,
												subject: e.target.value
											})
										}} value={data.subject} type="text" className="form-control" id="exampleInputSubject1" placeholder="Enter Subject" />
									</div>
									<div className="form-group col-4">
										<label htmlFor="exampleInputEnd1">End</label>
										<input onChange={(e) => {
											setData({
												...data,
												end: e.target.value
											})
										}} value={data.end} type="text" className="form-control" id="exampleInputEnd1" placeholder="Enter End" />
									</div>
									<div className="form-group col-4">
										<label htmlFor="exampleInputResources1">resources</label>
										<textarea onChange={(e) => {
											setData({
												...data,
												resources: e.target.value
											})
										}} value={data.resources} type="text" className="form-control" id="exampleInputResources1" placeholder="Enter resources" />
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="submit" className="btn btn-primary">Save</button>
							</div>

						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
