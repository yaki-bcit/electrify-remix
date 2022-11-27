import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import PageHeading from "~/components/PageHeading";
import WhiteBox from "~/components/WhiteBox";
import Checkbox from "~/components/Checkbox";
import RadioGroup from "~/components/RadioGroup";
import CheckboxGroup from "~/components/CheckboxGroup";

export const loader = async () => {
  return null
};

export default function Knowledge() {
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <PageHeading text="Knowledge" />
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
  );
}