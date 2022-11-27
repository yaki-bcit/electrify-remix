import WhiteBox from "./WhiteBox";

export default function Radio({text, value, name}) {
  return (
    <WhiteBox>
      <div className="flex items-center">
        <input 
          type="radio" 
          className="form-radio h-7 w-7 accent-[#3B8D95]" 
          value={value} 
          name={name} 
          id={value} 
        />
        <label className="ml-2" htmlFor={value}>
          {text}
        </label>
      </div>
    </WhiteBox>
  );
}