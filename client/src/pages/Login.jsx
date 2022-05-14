import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "util/baseURL";
import { setCookie } from "util/cookies";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    verify: "",
  });
  const [error, setError] = useState("");
  const [login, setLogin] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (login) {
        const res = await axios.post(`${baseURL}/api/auth/login`, {
          ...userInfo,
        });
        if (res.data.err) return setError(res.data.msg);
        setCookie("token", res.data.token);
        
      }
      if (!login) {
        if (userInfo.password !== userInfo.verify) {
          setUserInfo((prev) => ({ ...prev, password: "", verify: "" }));
          return setError("Passwords don't match");
        }
      }
    } catch (error) {
      console.log(
        `%cerror with submit`,
        "background-color:black; color: white; border: 2px red solid"
      );
    }
  };

  return (
    <div>
      <h1>{login ? "login" : "Signup"}</h1>
      {error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="text"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </label>
        <br />
        {!login && (
          <label htmlFor="verify">
            Verify password:{" "}
            <input
              type="password"
              placeholder="verify"
              name="verify"
              value={userInfo.verify}
              onChange={handleChange}
            />
          </label>
        )}
        <br />
        <button type="submit">{login ? "Login" : "Sign Up"}</button>
      </form>
      <button onClick={() => setLogin(!login)}>
        {login ? "need to sing up ?" : "already signed up?"}
      </button>
    </div>
  );
};

export default Login;
