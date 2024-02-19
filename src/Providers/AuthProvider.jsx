/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    let data = {
        name: 'shit',
    }

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;