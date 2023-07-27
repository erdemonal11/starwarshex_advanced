import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Logout from "./pages/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./components/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <nav>
        <ul>
          {user ? (
            <li>
              <Logout />
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <Route
        path="/login"
        element={user ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
    </Router>
  );
}

export default App;