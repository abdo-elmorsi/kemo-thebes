import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

const Home = () => {
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
    console.log(researches);

    return (
        <div>
            <main role="main">
                <div className="container">
                    <div className="row justify-content-around">
                        {loading ? (
                            <div>{"loading..."}</div>
                        ) : (
                            <div
                                className="d-flex justify-content-start align-items-center"
                                style={{ gap: "20px" }}
                            >
                                {researches?.map((ele, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="card"
                                                style={{
                                                    width: "18rem",
                                                    height: "300px",
                                                }}
                                            >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {ele?.id}
                                                    </h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        User: {ele?.user}
                                                    </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Start: {ele?.start}
                                                    </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        End: {ele?.end}
                                                    </h6>
                                                    <p className="card-text">
                                                        Description: {ele?.desc}
                                                    </p>
                                                    <div>
                                                        {ele.resources.length
                                                            ? ele.resources.map(
                                                                  (e, i) => {
                                                                      return (
                                                                          <a
                                                                              key={
                                                                                  i
                                                                              }
                                                                              href={`${e}`}
                                                                              className="d-block m-0 card-link"
                                                                          >
                                                                              {
                                                                                  e
                                                                              }
                                                                          </a>
                                                                      );
                                                                  }
                                                              )
                                                            : ""}
                                                    </div>
                                                    <small className="text-muted fs-12">
                                                        Date:{" "}
                                                        {moment(
                                                            ele.date
                                                        ).format(
                                                            "YYYY/MM/DD hh:mm"
                                                        )}
                                                    </small>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
