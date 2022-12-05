import { useState } from "react";
// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";

import PageHeading from "~/components/PageHeading";
import WhiteBox from "~/components/WhiteBox";
// import Checkbox from "~/components/Checkbox";
// import RadioGroup from "~/components/RadioGroup";
// import CheckboxGroup from "~/components/CheckboxGroup";

import HomeIconText from "~/components/HomeIconText";
import Paragraph from "~/components/Paragraph";
import ButtonDark from "~/components/Buttons/ButtonDark";

export const loader = async () => {
  return null
};

export default function Knowledge() {
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <PageHeading text="Knowledge Base" />
      <Paragraph text="Let's earn  about electric viechles and find the most suitable car for your needs."/>
      <WhiteBox href="safetyKnowledge" text="About Safety"/>
      <WhiteBox href="UsabilityKnowledge" text="About Usability"/>
      <WhiteBox href="savingGasKnowledge" text="About Saving Gas?"/>
      <WhiteBox href="?" text="About Someone Thinkone?"/>
      <ButtonDark text="Go Back" href="/home"/>
    </>
  );
}