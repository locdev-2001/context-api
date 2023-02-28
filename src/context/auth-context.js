import React, {useEffect, useState} from "react";
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email,password) => {},
    onLogout: ()=>{}
});
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedInInformation === "Logged_in") {
          setIsLoggedIn(true);
        }
    },[]);
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "Logged_in");
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
     }
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin:loginHandler
        }}>
        {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;