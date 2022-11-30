import ButtonDark from "~/components/ButtonDark"
import ButtonLight from "~/components/ButtonLight"
import Paragraph from "~/components/Paragraph"
import { Link } from "@remix-run/react";

export default function congratsPage() {
	const text = `
		Congratulations, you are the father!
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
						<ButtonDark text="Get Started" className=""/> 
					</div>
				</Link>
			  <Link to="/"> 
					<div className="p-3">
						<ButtonLight text="Try The Quiz Again"/>
					</div>
				</Link>
			</div>
		</>
	)
}