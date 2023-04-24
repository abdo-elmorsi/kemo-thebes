import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = "Please enter value in ";
        if (id === null || id === "") {
            isproceed = false;
            errormessage += " Username";
        }
        if (name === null || name === "") {
            isproceed = false;
            errormessage += " Fullname";
        }
        if (password === null || password === "") {
            isproceed = false;
            errormessage += " Password";
        }
        if (email === null || email === "") {
            isproceed = false;
            errormessage += " Email";
        }

        if (!isproceed) {
            toast.warning(errormessage);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            } else {
                isproceed = false;
                toast.warning("Please enter the valid email");
            }
        }
        return isproceed;
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = {
            id,
            name,
            password,
            email,
            phone,
            address,
            gender,
        };
        if (IsValidate()) {
            //console.log(regobj);
            axios
                .post("http://localhost:3001/user", regobj)
                .then((res) => {
                    console.log(res);
                    toast.success("Registered successfully.");
                    navigate("/login");
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Failed :" + error.message);
                });
            // fetch("http://localhost:3001/user", {
            //     method: "POST",
            //     headers: { "content-type": "application/json" },
            //     body: JSON.stringify(regobj),
            // })
            //     .then((res) => {
            //         toast.success("Registered successfully.");
            //         navigate("/login");
            //     })
            //     .catch((err) => {
            //         toast.error("Failed :" + err.message);
            //     });
        }
    };
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>
                                            User Name{" "}
                                            <span className="errmsg">*</span>
                                        </label>
                                        <input
                                            value={id}
                                            onChange={(e) =>
                                                idchange(e.target.value)
                                            }
                                            className="form-control"
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>
                                            Password{" "}
                                            <span className="errmsg">*</span>
                                        </label>
                                        <input
                                            value={password}
                                            onChange={(e) =>
                                                passwordchange(e.target.value)
                                            }
                                            type="password"
                                            className="form-control"
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>
                                            Full Name{" "}
                                            <span className="errmsg">*</span>
                                        </label>
                                        <input
                                            value={name}
                                            onChange={(e) =>
                                                namechange(e.target.value)
                                            }
                                            className="form-control"
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>
                                            Email{" "}
                                            <span className="errmsg">*</span>
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) =>
                                                emailchange(e.target.value)
                                            }
                                            className="form-control"
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>
                                            Phone{" "}
                                            <span className="errmsg"></span>
                                        </label>
                                        <input
                                            value={phone}
                                            onChange={(e) =>
                                                phonechange(e.target.value)
                                            }
                                            className="form-control"
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea
                                            value={address}
                                            onChange={(e) =>
                                                addresschange(e.target.value)
                                            }
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input
                                            id="male"
                                            type="radio"
                                            checked={gender === "male"}
                                            onChange={(e) =>
                                                genderchange(e.target.value)
                                            }
                                            name="gender"
                                            value="male"
                                            className="app-check"
                                        ></input>
                                        <label htmlFor="male">Male</label>
                                        <input
                                            type="radio"
                                            checked={gender === "female"}
                                            onChange={(e) =>
                                                genderchange(e.target.value)
                                            }
                                            name="gender"
                                            value="female"
                                            id="female"
                                            className="app-check"
                                        ></input>
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button
                                type="submit"
                                className="btn btn-primary mx-2"
                            >
                                Register
                            </button>{" "}
                            <Link to={"/login"} className="btn btn-danger">
                                Close
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
