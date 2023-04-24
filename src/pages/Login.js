import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameupdate] = useState("");
    const [password, passwordupdate] = useState("");

    const usenavigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            axios
                .get("http://localhost:3000/user/" + username)
                .then((res) => {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    usenavigate("/");
                })
                .catch((error) => {
                    toast.error("User Not Found");
                });
        }
    };

    const validate = () => {
        let result = true;
        if (username === "" || username === null) {
            result = false;
            toast.warning("Please Enter Username");
        }
        if (password === "" || password === null) {
            result = false;
            toast.warning("Please Enter Password");
        }
        return result;
    };
    return (
        <div className="row">
            <div
                className="offset-lg-3 col-lg-6"
                style={{ marginTop: "100px" }}
            >
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    User Name <span className="errmsg">*</span>
                                </label>
                                <input
                                    value={username}
                                    onChange={(e) =>
                                        usernameupdate(e.target.value)
                                    }
                                    className="form-control"
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>
                                    Password <span className="errmsg">*</span>
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        passwordupdate(e.target.value)
                                    }
                                    className="form-control"
                                ></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>{" "}
                            
                            <Link className="btn btn-success" to={"/register"}>
                                New User
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
