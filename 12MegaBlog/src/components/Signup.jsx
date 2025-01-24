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
      const signingUp = await authService.createAcount(data);
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
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Signup Account</h1>
            </div>
            <div className="divide-y divide-gray-200">
              {error && (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              )}
              <form onSubmit={handleSubmit(signup)}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                    <Input
                      label="Name"
                      type="name"
                      {...register("name", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      label="Email Adress"
                      type="email"
                      {...register("email", {
                        required: true,
                        validate: {
                          matchPattrn: (value) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              value
                            ) || "Email address must be a valid address",
                        },
                      })}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      label="Password"
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                      })}
                    />
                  </div>
                  <div className="relative">
                    <Button
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center mt-6">
            Already have account? &nbsp;
            <Link to="/login" className="text-sm text-cyan-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
