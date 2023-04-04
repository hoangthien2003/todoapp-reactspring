import { useNavigate } from "react-router-dom";

function UploadAvatar() {
  const navigate = useNavigate();

  return (
    <div className="layout-form items-center">
      <h2 className="text-[24px] font-medium mb-[25px] select-none">
        Upload your project avatar
      </h2>
      <div
        className="bg-gray-900 h-[90px] w-[90px] rounded-[10px] flex items-center justify-center
        hover:cursor-pointer opacity-90 transition-opacity hover:opacity-100"
      >
        <img
          src={require("../../assets/icons/camera.svg").default}
          alt="Camera icon"
        />
      </div>
      <div
        className="flex flex-row justify-center w-[70%]
        mt-[35px]"
      >
        <button
          type="submit"
          className="btn btn-submit btn-login opacity-90 
          hover:opacity-100 transition-opacity w-full h-[40px]"
        >
          Next
        </button>
        <div className="w-full flex items-center justify-center">
          <p
            className="text-purple text-medium text-[16px] select-none
          hover:cursor-pointer hover:underline w-[4.2em] text-center"
            onClick={() => navigate("../members-quantity")}
          >
            Skip this
          </p>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
