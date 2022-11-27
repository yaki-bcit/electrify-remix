import PageHeading from "~/components/PageHeading";
import WhiteBox from "~/components/WhiteBox";
import Table from "~/components/Table";
import Paragraph from "~/components/Paragraph";

export default function Dashboard() {
  return (
    <>
      <PageHeading text="Dashboard" />
      <WhiteBox>
        <h2 className="text-lg font-semibold">
          EV Advice for You
        </h2>
        <Paragraph text="You should buy a Tesla Model 3." />
        <h2 className="text-lg font-semibold mt-4">
          Knowledge Base and Quizzes
        </h2>
        <Table />
      </WhiteBox>
    </>
  );
}