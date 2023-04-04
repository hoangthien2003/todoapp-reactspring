import { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../redux/store";

function VerifyMail() {
  const email = useAppSelector((state) => state.mailReducer.value)
  const [code01, setCode01] = useState('')
  const [code02, setCode02] = useState('')
  const [code03, setCode03] = useState('')
  const [code04, setCode04] = useState('')

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
      <form className="mt-[3em]">
        <div className="grid grid-cols-4 gap-8 mb-[2.3em]">
        <input type="text" maxLength={1} pattern="[0-9]" className="layout-code-verify"
        value={code01} onChange={(e) => setCode01(e.target.value)}/>
        <input type="text" maxLength={1} pattern="[0-9]" className="layout-code-verify"
        value={code02} onChange={(e) => setCode02(e.target.value)}/>
        <input type="text" maxLength={1} pattern="[0-9]" className="layout-code-verify"
        value={code03} onChange={(e) => setCode03(e.target.value)}/>
        <input type="text" maxLength={1} pattern="[0-9]" className="layout-code-verify"
        value={code04} onChange={(e) => setCode04(e.target.value)}/>
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
