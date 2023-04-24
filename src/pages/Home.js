import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
    const [loading, setloading] = useState(true);
    const [researches, setResearches] = useState([]);

    useEffect(() => {
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

export default Home;
