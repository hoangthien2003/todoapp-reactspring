import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store";

function VerifyMail() {
  const email = useAppSelector((state) => state.mailReducer.value)
  const navigate = useNavigate()

  const [code01, setCode01] = useState('')
  const [code02, setCode02] = useState('')
  const [code03, setCode03] = useState('')
  const [code04, setCode04] = useState('')
  const [borderCode01, setBorderCode01] = useState('')
  const [borderCode02, setBorderCode02] = useState('')
  const [borderCode03, setBorderCode03] = useState('')
  const [borderCode04, setBorderCode04] = useState('')


  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    var flag: boolean = false;
    if (!code01) {
      setBorderCode01("border-red-300")
      flag = true
    }
    if (!code02) {
      setBorderCode02("border-red-300")
      flag = true
    }
    if (!code03) {
      setBorderCode03("border-red-300")
      flag = true
    }
    if (!code04) {
      setBorderCode04("border-red-300")
      flag = true
    }
    if (!flag) navigate("../detail")
  }

  useEffect(() => {
    console.log(email)
  })

  return (
    <div className="layout-form items-center pb-[2em]">
      <h1 className="text-[32px] font-medium text-gray-900 mb-[1.3em]">
        Varification code
      </h1>
      <img
        src={require("../../assets/icons/mail.svg").default}
        alt="Mail Icon"
        className="h-[130px] w-[130px] mb-[2.6em]"
      />
      <p className="font-light text-[16px]">We have to sent the code verification to your email</p>
      <p className="font-medium text-[17px] text-gray-900 mt-[15px]">{email}</p>
      <form className="mt-[3em]" onSubmit={validate}>
        <div className="grid grid-cols-4 gap-8 mb-[2.3em]">
        <input id="code01" type="text" maxLength={1} pattern="[0-9]" 
        className={`layout-code-verify ${borderCode01}`}
        value={code01} onChange={(e) => {
          setCode01(e.target.value)
          if (!code01) document.getElementById("code02")?.focus()
        }}
        onFocus={() => setBorderCode01("border-gray-300")} />
        <input id="code02" type="text" maxLength={1} pattern="[0-9]" 
        className={`layout-code-verify ${borderCode02}`}
        value={code02} onChange={(e) => {
          setCode02(e.target.value)
          if (!code02) document.getElementById("code03")?.focus()
          else document.getElementById("code01")?.focus()
        }}
        onFocus={() => setBorderCode02("border-gray-300")}/>
        <input id="code03" type="text" maxLength={1} pattern="[0-9]" 
        className={`layout-code-verify ${borderCode03}`}
        value={code03} onChange={(e) => {
          setCode03(e.target.value)
          if (!code03) document.getElementById("code04")?.focus()
          else document.getElementById("code02")?.focus()
        }}
        onFocus={() => setBorderCode03("border-gray-300")}/>
        <input id="code04" type="text" maxLength={1} pattern="[0-9]" 
        className={`layout-code-verify ${borderCode04}`}
        value={code04} onChange={(e) => {
          setCode04(e.target.value)
          if (code04) document.getElementById("code03")?.focus()
        }}
        onFocus={() => setBorderCode04("border-gray-300")}/>
        </div>
        <button
          type="submit"
          className="btn btn-submit btn-login opacity-90
          hover:opacity-100 transition-opacity w-full"
        >
          Continue
        </button>
      </form>
      <div className="w-full mt-[30px] flex justify-center">
        <p
          className="text-purple text-medium text-[16px] select-none
          hover:cursor-pointer hover:underline text-center"
        >
          Resend Code
        </p>
      </div>
    </div>
  );
}

export default VerifyMail;
