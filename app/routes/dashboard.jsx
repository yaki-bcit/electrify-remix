import PageHeading from "~/components/PageHeading";
import WhiteBox from "~/components/WhiteBox";
import Table from "~/components/Table";

export default function Dashboard() {
  return (
    <>
    <PageHeading text="Dashboard" />
    <WhiteBox>
      <Table />
    </WhiteBox>
    </>
  );
}