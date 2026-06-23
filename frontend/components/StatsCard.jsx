export default function StatsCard({
  title,
  value,
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h3 className="text-gray-700 text-sm font-medium">
        {title}
      </h3>

      <p className="text-3xl font-bold text-black mt-2">
        {value}
      </p>

    </div>
  );
}