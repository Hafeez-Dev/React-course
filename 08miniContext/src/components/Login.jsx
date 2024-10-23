import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = useContext(UserContext);
  const handlSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handlSubmit}>Login</button>
    </div>
  );
}

export default Login;
