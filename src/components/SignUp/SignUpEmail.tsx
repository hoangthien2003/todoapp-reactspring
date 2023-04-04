import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { regEmail } from "../../enums";

function SignUpEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [borderEmail, setBorderEmail] = useState("border-gray-300");
  const [email, setEmail] = useState("");

  const validate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!regEmail.test(email)) {
      setBorderEmail("border-red-300");
      console.error("Invalid email!");
    } else {
      navigate("./verify-mail");
    }
  };

  return (
    <div className="layout-form">
      {/* Welcome Title */}
      <h1 className="text-[32px] font-bold text-center">Sign up</h1>

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
        <button
          type="submit"
          className="btn btn-submit btn-login mt-[20px] opacity-90 hover:opacity-100 transition-opacity"
        >
          Continue
        </button>
      </form>

      <div className="flex flex-row items-center my-[20px]">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <p className="mx-[20px] text-gray-600 text-[12px]">Or</p>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      {/* Button Google */}
      <button className="btn btn-google">
        <img
          src={require("../../assets/icons/google.svg").default}
          alt="Google Icon"
          className="mr-[10px]"
        />
        <p>Continue with Google</p>
      </button>

      {/* Footer */}
      <div className="flex flex-row items-center mt-[30px] justify-center text-[15px] select-none">
        <p>Already have an account?</p>
        <p
          className="ml-[8px] text-cyan hover:cursor-pointer hover:underline"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </p>
      </div>
    </div>
  );
}

export default SignUpEmail;
