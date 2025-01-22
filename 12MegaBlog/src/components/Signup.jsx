import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Button, Input } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signup = async (data) => {
    try {
      setError("");
      const signingUp = await authService.signup(data);
      if (signingUp) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Signup</h1>
      </div>
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(signup)}>
          <div>
            <Input
              label="Email Adress"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattrn: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
          </div>
          <div>
            <Button type="submit">Signup</Button>
          </div>
        </form>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
