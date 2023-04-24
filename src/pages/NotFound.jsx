import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="d-flex min-vh-100 justify-content-center flex-column align-items-center">
			<h1>404</h1>
			<Link to="/">
				<button className="btn btn-primary">
					Back
				</button>
			</Link>
		</div>
	)
}