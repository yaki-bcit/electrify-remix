export default function Table(props) {
  return (
    <div className="">
      <table className="table-auto">
        <thead className="bg-gray-200 border">
          <tr>
            <th className="px-4 py-2">Knowledge</th>
            <th className="px-4 py-2">Quiz Result</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              Knowledge 1
            </td>
            <td className="border px-4 py-2">100%</td>
            <td className="border px-4 py-2">Retake</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">
              Knowledge 2
            </td>
            <td className="border px-4 py-2">0%</td>
            <td className="border px-4 py-2">Retake</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              Knowledge 3
            </td>
            <td className="border px-4 py-2">100%</td>
            <td className="border px-4 py-2">Retake</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}