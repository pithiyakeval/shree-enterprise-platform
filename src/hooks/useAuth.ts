import { useState, useEffect } from "react";
import api from "@/lib/api";
import { setToken, clearToken, getToken } from "@/lib/auth";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  // Auto-login if token exists
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser({ email: "admin" });
    }
  }, []);

  const login = async (
 email:string,
 password:string
)=>{

 try{

  clearToken();

  const res =
  await api.post("/login",{

   email,
   password

  });

  const token =
  res.data?.access_token;

  if(!token){

   console.log("No token");

   return false;

  }

  setToken(token);

  setUser({

   email

  });

  return true;

 }catch(err:any){

  console.log(

   "LOGIN ERROR:",

   err.response?.data ||
   err.message

  );

  return false;

 }

};
  const logout = () => {
    clearToken();
    setUser(null);
    window.location.href = "/admin/login";
  };

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };
};
