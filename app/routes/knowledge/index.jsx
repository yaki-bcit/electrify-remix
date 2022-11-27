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
      <PageHeading text="Knowledge Base" />
      
    </>
  );
}