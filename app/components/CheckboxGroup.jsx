import Checkbox from "./Checkbox";

export default function CheckboxGroup({name, options, handleChange}) {
  return (
    <fieldset>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          text={option.text}
          name={name}
          value={option.value}
          handleChange={handleChange}
          checked={option.checked}
        />
      ))}
    </fieldset>
  );
}