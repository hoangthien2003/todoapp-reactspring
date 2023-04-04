import { useState } from "react";

function VerifyMail() {
  const [email, setEmail] = useState(null);

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
