import CharList from "pages/CharList";
import Login from "pages/Login";
import Char from 'pages/Login'
import { Routes, Route } from "react-router-dom";

function App() {
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
