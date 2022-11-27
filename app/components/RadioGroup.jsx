import Radio from "./Radio";

export default function RadioGroup({name, options}) {
  return (
    <fieldset>
      {options.map((option) => (
        <Radio
          key={option.value}
          text={option.text}
          name={name}
          value={option.value}
        />
      ))}
    </fieldset>
  );
}