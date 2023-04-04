import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function VerifyMail() {
  const email = useSelector((state: RootState) => state.mailReducer.value)

  return (
    <div className="layout-form">
      <h1 className="text-[32px] font-medium text-gray-900">
        Varification code
      </h1>
      <img
        src={require("../../assets/icons/mail.svg").default}
        alt="Mail Icon"
      />
      <p>We have to sent the code verification to your email</p>
      <p>{email}</p>
    </div>
  );
}

export default VerifyMail;
