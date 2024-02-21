import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const nav = useNavigate()
    if (!loading && !user?.email) { return nav('/login') }

    return children
};

export default PrivateRoute;