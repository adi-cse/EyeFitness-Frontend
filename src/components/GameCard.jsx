const GameCard = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-semibold text-blue-900 mb-3">
        {title}
      </h2>

      <p className="text-gray-600 mb-5">
        {description}
      </p>

      <button
        onClick={onClick}
        className="bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        {buttonText}
      </button>

    </div>
  );
};

export default GameCard;