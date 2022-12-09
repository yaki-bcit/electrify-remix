import PageHeading from "~/components/PageHeading"
import WhiteBox from "~/components/WhiteBox"
import Paragraph from "~/components/Paragraph"

export default function About() {
  return (
    <>
      <PageHeading text="About" />
      <WhiteBox>
        <h2 className="text-2xl font-semibold">
          EV Advice for You
        </h2>

        <p className="mb-2 text-xl">
          Electrify is an app that helps you learn about EV technology and find out if and electric vehicle is right for YOU.
        </p>
        <p className="mb-2 text-xl">
          After you've done your onboarding questionnaire, you'll see personalized advice regarding EVs in the <a href="/dashboard" className="font-semibold text-teal-700 underline">dashboard</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          Knowledge Base and Quizzes
        </h2>

        <p className="mb-2 text-xl">
          Electrify has a knowledge base of articles and quizzes to help you learn about EV technology.
        </p>
        <p className="mb-2 text-xl">
          You can go directly to the <a href="/knowledge" className="font-semibold text-teal-800 underline">knowledge base</a> to learn more about EVs.
        </p>
        <p className="mb-2 text-xl">
          You can also go straight to the <a href="/quiz" className="font-semibold text-teal-800 underline">quiz</a> section to test your knowledge.
        </p>
        <p className="mb-2 text-xl">
          In your <a href="/dashboard" className="font-semibold text-teal-800 underline">dashboard</a>
          , you can see a table which links to all the knowledge articles and all the related quizzes.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          A note about usability
        </h2>

        <p className="mb-2 text-xl">
          This app works best if your browser enables local storage. If you use private browsing mode, your quiz answers will not be saved between sessions.
        </p>
      </WhiteBox>
    </>
  )
}