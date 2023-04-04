import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { regEmail, regPassword } from "../enums";

function Login() {
  const navigate = useNavigate();
  const [borderEmail, setBorderEmail] = useState("border-gray-300");
  const [borderPass, setBorderPass] = useState("border-gray-300");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginWithGoogle() {
    // await axios
    //   .get("http://localhost:8080/api/signin-google")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!regEmail.test(email)) {
      setBorderEmail("border-red-300");
      console.error("Invalid email!");
    }
    if (!regPassword.test(password)) {
      setBorderPass("border-red-300");
      console.error("Invalid password!");
    }
  };

  return (
    <div className="screen-form">
      <div className="layout-form">
        {/* Welcome Title */}
        <h1 className="text-[32px] font-bold text-center">Welcome back</h1>

        {/* Login Form */}
        <form className="flex flex-col mt-[30px]" onSubmit={(e) => validate(e)}>
          <div className="mb-[15px]">
            <label htmlFor="email" className="label-form">
              Email address
            </label>
            <div
              className={`border-input-form ${borderEmail}`}
              onClick={() => {
                document.getElementById("email")?.focus();
              }}
            >
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-form"
                onFocus={() => {
                  setBorderEmail("border-gray-600");
                }}
                onBlur={() => {
                  setBorderEmail("border-gray-300");
                }}
              />
            </div>
          </div>
          <div className="mb-[15px]">
            <label htmlFor="password" className="label-form">
              Password
            </label>
            <div
              className={`border-input-form ${borderPass}`}
              onClick={() => {
                document.getElementById("password")?.focus();
              }}
            >
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-form"
                onFocus={() => {
                  setBorderPass("border-gray-600");
                }}
                onBlur={() => {
                  setBorderPass("border-gray-300");
                }}
              />
            </div>
            <p
              className="text-[13px] text-gray-600 select-none hover:cursor-pointer hover:underline
            w-[9rem]"
            >
              Forgot your password?
            </p>
          </div>
          <button
            type="submit"
            className="btn btn-submit btn-login mt-[20px] opacity-90 hover:opacity-100 transition-opacity"
          >
            Login
          </button>
        </form>

        <div className="flex flex-row items-center my-[20px]">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="mx-[20px] text-gray-600 text-[12px]">Or</p>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        {/* Button Google */}
        <button className="btn btn-google" onClick={loginWithGoogle}>
          <img
            src={require("../assets/icons/google.svg").default}
            alt="Google Icon"
            className="mr-[10px]"
          />
          <p>Continue with Google</p>
        </button>

        {/* Footer */}
        <div className="flex flex-row items-center mt-[30px] justify-center text-[15px] select-none">
          <p>Don't have an account?</p>
          <p
            className="ml-[8px] text-cyan hover:cursor-pointer hover:underline"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
