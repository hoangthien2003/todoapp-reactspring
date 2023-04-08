import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjName() {
  const [borderColor, setBorderColor] = useState("border-gray-300");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) setBorderColor("border-red-300");
    else navigate("../avatar") 
  };

  return (
    <div className="layout-form">
      <h2 className="text-[24px] font-medium text-left">
        Let's set up your first project
      </h2>

      <form className="flex flex-col mt-[2rem]" onSubmit={validate}>
        <div className="mb-[15px]">
          <label htmlFor="email" className="label-form">
            What's something you are currently working on?
          </label>
          <div
            className={`border-input-form ${borderColor} border-t-0 border-r-0 border-l-0 rounded-none
transition-colors`}
            onClick={() => {
              document.getElementById("email")?.focus();
            }}
          >
            <input
              type="text"
              name="email"
              id="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-form px-[8px] py-[4px] text-[32px]"
              onFocus={() => {
                setBorderColor("border-purple");
              }}
              onBlur={() => {
                setBorderColor("border-gray-300");
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-submit btn-login mt-[20px] opacity-90 hover:opacity-100 transition-opacity"
        >
          Next
        </button>
      </form>
      <div className="w-full mt-[30px] flex justify-center">
        <p
          className="text-purple text-medium text-[16px] select-none
          hover:cursor-pointer hover:underline w-[4.2em] text-center"
          onClick={() => navigate("../avatar")}
        >
          Skip this
        </p>
      </div>
    </div>
  );
}

export default ProjName;
