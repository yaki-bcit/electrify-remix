import Paragraph from "~/components/Paragraph"


export default function testpage() {
	let text = `
		Are you thinking about getting an electric car?
		There are a lot of things to consider before you make the switch.
		This quiz will help you figure out if it is the right decision for you.
	`
	

	return (
		<>
			<img src="/images/Logo.svg" className="" />
			<div className="bg-white padding-3">
				<Paragraph text={text} />		
			</div>
		</>
	)
}