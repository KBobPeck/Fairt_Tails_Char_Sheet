import Navbar from "Components/Navbar";
import CharList from "Pages/CharList";
import Login from "Pages/Login";
import Char from "Pages/Char";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { getCookies } from "util/cookies";
import {
  getUserId,
  selectAuth,
  selectUsername,
} from "./redux/reducers/authReducer";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth);
  const username = useSelector(selectUsername);

  const { token } = getCookies();
  if (token && !auth) dispatch(getUserId({ token }));

  const unprotectedRoutes = ["/"];

  if (auth && unprotectedRoutes.includes(location.pathname))
    return <Navigate to={`/charlist/${username}`} />;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/char/:id"
          element={auth ? <Char /> : <Navigate to={"/"} />}
        />
        <Route
          path="/charlist/:username"
          element={auth ? <CharList /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
