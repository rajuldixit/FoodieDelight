import { useAuth } from "context/AuthContext";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    const getUser = async () => {
      await user;
      if (user && user.role !== "ADMIN") {
        navigate("/signin", { replace: true });
      }
    };
    getUser();
  }, [user]);
  return children;
};

export default ProtectedRoute;
