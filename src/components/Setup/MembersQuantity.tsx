import MemberButton from "./MemberButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MembersQuantity() {
  const [whichChoosed, setWhichChoosed] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="layout-form w-[46em]">
      <h2 className="text-[24px] font-medium select-none">
        How many people will you be working with?
      </h2>
      <div className="mt-[2em] grid grid-cols-5 grid-rows-2 gap-6">
        <MemberButton
          text="Just me"
          isChoosed={whichChoosed === 0 ? true : false}
          onClick={() => setWhichChoosed(0)}
        />
        <MemberButton
          text="2-5"
          isChoosed={whichChoosed === 1 ? true : false}
          onClick={() => setWhichChoosed(1)}
        />
        <MemberButton
          text="6-10"
          isChoosed={whichChoosed === 2 ? true : false}
          onClick={() => setWhichChoosed(2)}
        />
        <MemberButton
          text="11-20"
          isChoosed={whichChoosed === 3 ? true : false}
          onClick={() => setWhichChoosed(3)}
        />
        <MemberButton
          text="21-50"
          isChoosed={whichChoosed === 4 ? true : false}
          onClick={() => setWhichChoosed(4)}
        />
        <MemberButton
          text="51-100"
          isChoosed={whichChoosed === 5 ? true : false}
          onClick={() => setWhichChoosed(5)}
        />
        <MemberButton
          text="101-200"
          isChoosed={whichChoosed === 6 ? true : false}
          onClick={() => setWhichChoosed(6)}
        />
        <MemberButton
          text="201-500"
          isChoosed={whichChoosed === 7 ? true : false}
          onClick={() => setWhichChoosed(7)}
        />
        <MemberButton
          text="500+"
          isChoosed={whichChoosed === 8 ? true : false}
          onClick={() => setWhichChoosed(8)}
        />
      </div>
      <div
        className="flex flex-row justify-center w-[45%]
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
          >
            Skip this
          </p>
        </div>
      </div>
    </div>
  );
}

export default MembersQuantity;
