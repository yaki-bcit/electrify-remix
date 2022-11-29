import Paragraph from "~/components/Paragraph";
import ButtonDark from "~/components/ButtonDark";
import ButtonLight from "~/components/ButtonLight";

export default function LandingPage() {
	let text = `
        Are you planning on getting an electric car?
        This app will help you figure out if it is the right decision for you.
    `;


	return (
		<main>
			<img src="/images/Logo.svg" className="" />
			<div className="bg-white m-6 p-6 flex flex-col">
				<Paragraph text={text} />
				<div className="">
					<div className="m-3 ">
						<ButtonDark text="Get Started" className=""/>
					</div>
					<div className="m-3">
						<ButtonLight className="p-4 m-4" text="Do I Need An Electric Vehicle?" />
					</div>
				</div>
			</div>
		</main>
	)
}