import { useState, useEffect } from "react";
import api from "@/lib/api";
import { setToken, clearToken, getToken } from "@/lib/auth";

export const useAuth = () => {

  const [user, setUser] = useState<any>(null);
  const [loading,setLoading]=useState(true);

  // AUTO LOGIN FROM TOKEN
  useEffect(()=>{

    const token=getToken();

    if(token){

      setUser({
        email:"admin"
      });

    } else{
      clearToken();
    }

    setLoading(false);

  },[]);


  // LOGIN
  const login = async (
    email:string,
    password:string
  )=>{

    try{

      clearToken();

      const res=
      await api.post("/admin/login",{

        email,
        password

      });

      const token=
      res.data?.access_token;

      if(!token){

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


  // LOGOUT
  const logout=()=>{

    clearToken();

    setUser(null);

    window.location.href="/admin/login";

  };


  return{

    user,

    login,

    logout,

    loading,

    isAuthenticated:!!user

    

  };

};