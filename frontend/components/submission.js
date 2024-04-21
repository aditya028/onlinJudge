export default function Submission() {
  return (
    <div className="overflow-x-auto my-4 mx-2">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Status</th>
            <th>Question</th>
            <th>Language</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="text-green-400">Accepted</th>
            <td>First Problem</td>
            <td>c++</td>
            <td>14 march</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
