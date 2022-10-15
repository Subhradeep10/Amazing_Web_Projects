import { Navigate } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("auth");
  return token;
};

export function PrivateOutlet({ children }: any) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

export function PublicOutlet({ children }: any) {
  const isAuthenthicated = useAuth();
  return !isAuthenthicated ? children : <Navigate to="/private-route" />;
}
