import { logout } from "@redux/Actions/auth";
import { useDispatch } from "react-redux";

function Header({ privateRoute }: any) {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <div className="center-between">
      <div>Navbar</div>
      {privateRoute && (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Header;
