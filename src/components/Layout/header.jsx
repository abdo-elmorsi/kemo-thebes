import { Link, useNavigate } from "react-router-dom";

export default function Header() {
	const usenavigate = useNavigate();

	return (
		<header className="">
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<Link className="navbar-brand" to="/">
					THEBES ACADEMY
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarCollapse"
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home{" "}
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/profile">
								Profile
							</Link>
						</li>

					</ul>
					<form className="form-inline mt-2 mt-md-0 mr-4">
						<input
							className="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-info my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>

					<button
						onClick={() => {
							localStorage.removeItem("user")
							usenavigate("/login");

						}}
						className="btn btn-outline-success my-2 my-sm-0"
					>
						Log out
					</button>
				</div>
			</nav>
		</header>
	)
}