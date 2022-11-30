import Paragraph from "~/components/Paragraph";
import ButtonDark from "~/components/ButtonDark";
import ButtonLight from "~/components/ButtonLight";
import { Link } from "@remix-run/react";

export default function LandingPage() {
	let text = `
        Are you planning on getting an electric car?
        This app will help you figure out if it is the right decision for you.
    `;


	return (
		<main>
			<div className="block justify-items-center">
				<img src="/images/Logo.svg" className="mx-auto" />
			</div>
			<div className="bg-white p-3 text-center">
				<Paragraph text={text} className="p-4" />
				<Link to="/">
					<div className="p-4">
						<ButtonDark text="Start The Quiz" className=""/> 
					</div>
				</Link>
			  <Link to="/"> 
					<div className="p-3">
						<ButtonDark text="Go Back"/>
					</div>
				</Link>
			</div>
		</main>
	)
}