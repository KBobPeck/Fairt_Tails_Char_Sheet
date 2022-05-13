import React, { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    verify: "",
  });
  const [login, setLogin] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (login) {
    }
  };

  return (
    <div>
      <h1>{login ? "login" : "Signup"}</h1>
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
      </form>
      <button onClick={() => setLogin(!login)}>
        {login ? "need to sing up ?" : "already signed up?"}
      </button>
    </div>
  );
};

export default Login;
