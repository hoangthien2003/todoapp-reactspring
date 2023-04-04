import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regEmail, regPassword } from "../../enums";

function Detail() {
  const navigate = useNavigate();
  const [borderName, setBorderName] = useState("border-gray-300");
  const [borderPass, setBorderPass] = useState("border-gray-300");
  const [borderConfirm, setBorderConfirm] = useState("border-gray-300");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var flag: boolean = true;
    if (!fullName) {
      setBorderName("border-red-300");
      flag = false;
    }
    if (!regPassword.test(password)) {
      setBorderPass("border-red-300");
      flag = false;
    }
    if (password !== confirm) {
      setBorderPass("border-red-300");
      setBorderConfirm("border-red-300");
      flag = false;
    }
    if (flag) {
      navigate("../proj-name");
    }
  };

  return (
    <div className="layout-form">
      {/* Welcome Title */}
      <h1 className="text-[32px] font-bold text-center">Sign up</h1>

      {/* Login Form */}
      <form className="flex flex-col mt-[30px]" onSubmit={(e) => validate(e)}>
        <div className="mb-[2rem]">
          <label htmlFor="email" className="label-form">
            Enter your full name
          </label>
          <div
            className={`border-input-form ${borderName}`}
            onClick={() => {
              document.getElementById("email")?.focus();
            }}
          >
            <input
              type="text"
              name="email"
              id="email"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input-form"
              onFocus={() => {
                setBorderName("border-gray-600");
              }}
              onBlur={() => {
                setBorderName("border-gray-300");
              }}
            />
          </div>
        </div>
        <div className="mb-[2rem]">
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
          <p className="text-[12px] text-gray-600 mt-[10px]">
            Password must be 8 characters or longer.
          </p>
        </div>
        <div className="mb-[8px]">
          <label htmlFor="password" className="label-form">
            Confirm Password
          </label>
          <div
            className={`border-input-form ${borderConfirm}`}
            onClick={() => {
              document.getElementById("confirm")?.focus();
            }}
          >
            <input
              type="password"
              name="confirm"
              id="confirm"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="input-form"
              onFocus={() => {
                setBorderConfirm("border-gray-600");
              }}
              onBlur={() => {
                setBorderConfirm("border-gray-300");
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-submit btn-login mt-[20px] opacity-90 hover:opacity-100 transition-opacity"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Detail;
