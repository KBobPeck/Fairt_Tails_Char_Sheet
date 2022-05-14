import CharList from "pages/CharList";
import Login from "pages/Login";
import Char from "pages/Login";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { selectAuth, selectUser } from "./redux/reducers/authReducer";

function App() {
  const auth = useSelector(selectAuth);
  const userId = useSelector(selectUser);
  const location = useLocation();

  console.log(location.pathname);
  const unprotectedRoutes = ["/"];

  if (auth && unprotectedRoutes.includes(location.pathname))
    return <Navigate to={`/charlist/${userId}`} />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/char/:id" element={<Char />} />
        <Route path="/charlist/:user" element={<CharList />} />
      </Routes>
    </div>
  );
}

export default App;
