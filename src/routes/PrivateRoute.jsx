import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) { return <p className="text-5xl text-center mt-12 animate-pulse">Loading<span className=" inline-block animate-bounce">.</span></p> }
    if (!user) { return <Navigate to="/login"></Navigate> }


    return children
};

export default PrivateRoute;