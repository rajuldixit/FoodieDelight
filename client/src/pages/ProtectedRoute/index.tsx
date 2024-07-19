import { useAuth } from "context/AuthContext";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    console.log("herererrere");
    if (!user || (user && user.role !== "ADMIN")) {
      navigate("/signin", { replace: true });
    }
  }, [user, navigate]);
  return children;
};

export default ProtectedRoute;
