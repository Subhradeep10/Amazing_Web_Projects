import { Route, Routes } from "react-router-dom";
import { PrivateOutlet, PublicOutlet } from "@components/Routes/PrivateRoutes";
import Login from "@views/Login";
import Dashboard from "@views/Dashboard";

const RoutesUI = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicOutlet>
            <Login />
          </PublicOutlet>
        }
      />
      <Route
        path="/private-route"
        element={
          <PrivateOutlet>
            <Dashboard />
          </PrivateOutlet>
        }
      />
      {/* 404 Route */}
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};

export default RoutesUI;
