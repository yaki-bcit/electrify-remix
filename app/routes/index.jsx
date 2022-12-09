import {
  Outlet
} from "@remix-run/react";
import Paragraph from "~/components/Paragraph";
import ButtonDark from "~/components/Buttons/ButtonDark";
import ButtonLight from "~/components/Buttons/ButtonLight";


import WhiteBox from "~/components/WhiteBox";

// a loader to redirect the user to the dashboard if they have already done onboarding

export default function Index() {
  let text = `
        Are you planning on getting an electric car?
        This app will help you figure out if it is the right decision for you.
    `;

  return (
    <div style={{ fontFamily: "Mina, system-ui, sans-serif", lineHeight: "1.4" }} className="">
      	<main>
			<div className="block justify-items-center">
				<img src="/images/Logo.svg" className="mx-auto" />
			</div>
			<div className="h-[400px] bg-white rounded-lg p-5 mb-4 text-lg  grid grid-rows-2 text-center">
				<Paragraph text={text} />
				<ButtonDark href="/home" text="Get Started" />
				<ButtonLight href="/welcome" text="Do I need an EV?" />
			</div>
		</main>
    </div>
  );
}
