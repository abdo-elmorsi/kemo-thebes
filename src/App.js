import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <ToastContainer
                theme="colored"
                position="top-center"
            ></ToastContainer>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Layout>
                                    <Home />
                                </Layout>
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Layout>
                                    <Profile />
                                </Layout>
                            </>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
