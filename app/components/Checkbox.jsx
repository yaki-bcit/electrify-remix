import WhiteBox from "./WhiteBox";

export default function Checkbox({text, value, name, checked, handleChange}) {
  return (
    <WhiteBox>
      <div className="flex items-center">
        <input 
          type="checkbox" 
          className="form-checkbox h-7 w-7 accent-[#3B8D95] option" 
          value={value} 
          name={name} 
          id={value}
          defaultChecked={checked}
          onChange={handleChange}
        />
      <label className="ml-4" htmlFor={value}>{text}</label>
      </div>
    </WhiteBox>
  )
}