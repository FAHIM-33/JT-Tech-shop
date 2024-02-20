import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import pt from 'prop-types'

const PrivateRoute = ({ children }) => {
    let { user, loading } = useContext(AuthContext)

    if (loading) { return <p className="text-5xl text-center mt-12 animate-pulse">Loading<span className=" inline-block animate-bounce">.</span></p> }
    if (!user) { return <Navigate to="/login"></Navigate> }

    return children;
};
PrivateRoute.propTypes = {
    children: pt.node,
}
export default PrivateRoute;