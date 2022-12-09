import ButtonDark from "./Buttons/ButtonDark";
export default function WhiteBoxtTall(props) {
    return (
      <div className="h-[490px] bg-white rounded-lg p-5 mb-4 text-lg  grid grid-rows-2 text-center ">
        {props.text}
        <div >
        <ButtonDark text={props.buttonText} href={props.href}/>
        </div>
      </div>
    );
  }