/* eslint-disable react/prop-types */
import { createContext } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {


    let data = {
        name: 'shit',
    }

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;