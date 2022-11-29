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
            <h1>Posts</h1>
            <img src="/images/Logo.svg"/>
            <div className="bg-white">
                <Paragraph text={text} />
                <ButtonDark text="Get Started" />
                <ButtonLight text="Do I Need An Electric Vehicle?" />
            </div>
        </main>
    )
}