import { Navigate } from "react-router-dom";
import { getToken } from "@/lib/auth";

export default function ProtectedRoute({ children }: any) {

  const token = getToken();

  // Not logged in
  if(!token){

    return <Navigate to="/admin/login" replace />;

  }

  return children;

}