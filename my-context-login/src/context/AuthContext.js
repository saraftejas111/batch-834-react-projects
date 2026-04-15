import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
};

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) setUser(JSON.parse(storedUser));
}, []);

const login = (email, password) => {
  if (email === "tejas@tka.com" && password === "tka123") {
    const userData = { email };
    setUser(userData)
    localStorage.setItem("user" , JSON.stringify(userData));
    return true ; 
  }
  return false ; 
};

const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
}

return (
    <AuthContext.Provider value={{user , login , logout}}>
        {Children}
    </AuthContext.Provider>
)