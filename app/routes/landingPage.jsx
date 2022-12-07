import Paragraph from "~/components/Paragraph";
import ButtonDark from "~/components/Buttons/ButtonDark";
import ButtonLight from "~/components/Buttons/ButtonLight";

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
			<div className="h-[400px] bg-white rounded-lg p-5 mb-4 text-lg  grid grid-rows-2 text-center">
				<Paragraph text={text} />
				<ButtonDark href="/home" text="Get Started" />
				<ButtonLight href="/testPage" text="Do I need an EV" />
			</div>
		</main>
	)
}