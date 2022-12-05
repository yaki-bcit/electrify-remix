
import ButtonDark from "~/components/Buttons/ButtonDark"
import Paragraph from "~/components/Paragraph"
import { Link } from "@remix-run/react";

export default function testpage() {
	let text = `
		Are you thinking about getting an electric car?
		There are a lot of things to consider before you make the switch.
		This quiz will help you figure out if it is the right decision for you.
	`
	

	return (
		<>
			<div className="block justify-items-center">	
				<img src="/images/Logo.svg" className="mx-auto" />
			</div>
			<div className="bg-white p-3 text-center">
				<Paragraph text={text} className="p-4"/>		
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
		</>
	)
}