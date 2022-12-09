
import ButtonDark from "~/components/Buttons/ButtonDark"
import Paragraph from "~/components/Paragraph"


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
			<div className="h-[400px] bg-white rounded-lg p-5 mb-4 text-lg  grid grid-rows-2 text-center">
				<Paragraph text={text} />
				<div className="my-4">
					<ButtonDark href="/quiz/welcome/1" text="Start the quiz" onClick={() => {}} />
					<ButtonDark href="/" text="Go back" />
				</div>
			</div>
		</>
	)
}