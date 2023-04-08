interface Props {
  text: String;
  isChoosed: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function MemberButton(props: Props) {
  return (
    <div
      className={`border-[1px] border-gray-350 rounded-[6px] border-solid text-center
      py-[10px] text-[14px] font-medium select-none cursor-pointer ${
        props.isChoosed ? "bg-cyan text-white" : "text-gray-900"
      }`}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default MemberButton;
