import Checkbox from "./Checkbox";

export default function CheckboxGroup({name, options}) {
  return (
    <fieldset>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          text={option.text}
          name={name}
          value={option.value}
        />
      ))}
    </fieldset>
  );
}