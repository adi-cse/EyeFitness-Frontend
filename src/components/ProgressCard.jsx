const ProgressCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-gray-500 mb-2">
        {title}
      </h2>

      <h1 className="text-3xl font-bold text-blue-900">
        {value}
      </h1>

    </div>
  );
};

export default ProgressCard;