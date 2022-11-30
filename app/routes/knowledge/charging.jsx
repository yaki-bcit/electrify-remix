import PageHeading from "~/components/PageHeading";
import WhiteBox from "~/components/WhiteBox";
import Checkbox from "~/components/Checkbox";
import RadioGroup from "~/components/RadioGroup";
import CheckboxGroup from "~/components/CheckboxGroup";

export default function Charging() {
  return (
    <>
      <PageHeading text="Charging" />
      <WhiteBox>
        <p className="text-lg">
          Charging is a very important part of the electric vehicle experience.
          It is important to understand how to charge your vehicle and how to
          charge it safely.
        </p>
      </WhiteBox>
      <CheckboxGroup
        name="knowledge"
        options={[
          { text: "I know what a database is", value: "database" },
          { text: "I know what a server is", value: "server" },
          { text: "I know what a client is", value: "client" },
          { text: "I know what a request is", value: "request" },
          { text: "I know what a response is", value: "response" },
        ]}
      />

      <RadioGroup
          name="radio"
          options={[
            { text: "I have read the documentation", value: "docs" },
            { text: "I have read the internet", value: "internet" },
            { text: "I have read the documentation and the internet", value: "docs-internet" },
          ]}
        />
    </>
  )
}