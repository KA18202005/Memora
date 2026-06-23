export default function Recommendations({
  recommendations,
}) {

  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recommended Revisions
      </h2>

      <div className="space-y-3">

        {recommendations.map(
          (item, index) => (

            <div
              key={index}
              className="border rounded-lg p-3"
            >

              <h3 className="font-semibold text-black">
                {item.topic}
              </h3>

              <p>
                Score:
                {" "}
                {item.retention_score}
              </p>

              <p>
                Priority:
                {" "}
                {item.priority}
              </p>

              <p>
                {item.recommendation}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}