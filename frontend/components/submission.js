export default function Submission({ submissions }) {

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
          {submissions?.map((submission) => (
            <tr key={submission.id}>
              <td
                className={`text-${
                  submission.isAccepted ? "green-400" : "red-400"
                } font-semibold`}
              >
                {submission.isAccepted ? "Accepted" : "Wrong Answer"}
              </td>
              <td>{submission.title}</td>
              <td>{submission.language}</td>
              <td>{submission.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
