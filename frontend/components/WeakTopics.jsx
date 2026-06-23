export default function WeakTopics({
  weakTopics,
}) {

  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Weak Topics
      </h2>

      {weakTopics.length === 0 ? (
        <p>
          No weak topics found 🎉
        </p>
      ) : (
        <div className="space-y-3">

          {weakTopics.map(
            (topic, index) => (
              <div
                key={index}
                className="border rounded-lg p-3"
              >
                <h3 className="font-medium">
                  {topic.topic}
                </h3>

                <p>
                  Retention:
                  {" "}
                  {topic.retention_score}%
                </p>
              </div>
            )
          )}

        </div>
      )}

    </div>
  );
}