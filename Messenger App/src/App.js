import logo from "./logo.svg";
import Login from "./pages/Login";
import "./Style.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtctedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtctedRoute>
                <Home />
              </ProtctedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
